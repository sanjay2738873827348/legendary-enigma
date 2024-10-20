"use client"; //DONT WRY ABT DIS YET CHAT!

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function TdModule() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(30);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x0ff190,
      wireframe: false,
    }); 
    const tor = new THREE.Mesh(geometry, mat);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(10, 10, 10); 
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const textureLoader = new THREE.TextureLoader();

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "/app/assets/3dModels/disco_ball/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the GLTF model:", error);
      }
    );

    function animate() {
      requestAnimationFrame(animate);

      tor.rotation.x += 0.01;
      tor.rotation.y += 0.01;
      tor.rotation.z += 0.01;

      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg" ref={canvasRef}></canvas>;
}

export default TdModule;

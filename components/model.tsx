'use client'

import { useEffect, useRef } from 'react'
import  * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export default function Model(){
	const mountRef = useRef<HTMLDivElement | null>(null)

	useEffect(()=>{
		const mount = mountRef.current
		if(!mount) return

		const scene = new THREE.Scene()
		const sceneWidth = window.innerWidth;
		const sceneHeight = window.innerHeight;

		const renderer = new THREE.WebGLRenderer( { alpha: true } )
		renderer.setSize(sceneWidth, sceneHeight)
		mount.appendChild(renderer.domElement)

		const camera = new THREE.PerspectiveCamera(75, sceneWidth/sceneHeight, 0.1, 1000)

		const ambientLight = new THREE.AmbientLight(0x404040, 0.2)
		scene.add(ambientLight)

		const directionalLight = new THREE.DirectionalLight(0xffffff,.5)
		scene.add(directionalLight)

		const light = new THREE.PointLight(0xc4c4c4,0.5);
		scene.add(light)

		const gltfloader = new GLTFLoader()
		gltfloader.load('f22/scene.gltf', (gltf) =>{
			const model = gltf.scene
			model.traverse((obj)=>{
				obj.material = new THREE.MeshStandardMaterial({metalness: 0.5})
			})
			model.scale.set(0.01,0.01,0.01)
			model.position.set(0, 3, 0)
			scene.add(model)
		})

		camera.position.z = 6

		renderer.setAnimationLoop( animate )

		function animate(){
			scene.traverse((object) => {
				if(object instanceof THREE.Mesh){
					object.rotation.x += 0.001
					object.rotation.y += 0.001
				}
			})

			renderer.render(scene, camera)
		}
	})

	return(
		<div ref={mountRef} className='w-screen h-screen' />
	)
}
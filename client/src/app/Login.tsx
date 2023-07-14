'use client'
import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="flex flex-col items-center w-[90%] md:w-[50%] lg:w-[25%] mt-[5rem] mx-auto shadow shadow-stone-300">
                <div className="flex flex-col p-12">
                    <h1 className="text-2xl text-center mb-4 text-stone-600">Login</h1>
                    <input className="p-2 bg-stone-100 mb-4" placeholder="Email"></input>
                    <input className="p-2 bg-stone-100" placeholder="Password"></input>
                    <button className="mt-4 py-2 rounded-md bg-cyan-700 border-b-4 border-cyan-800 text-white hover:translate-y-1 transition-transform">Log in</button>
                </div>
            </div>
        )
    }
}

'use client';
import React from 'react'
import { Vortex } from '@/components/ui/vortex';
import { useState } from 'react';


interface FormData {
    name: string;
    email: string;
    message: string;
  }


function page() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
      });
    
      const   
     handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit   
     = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission   
   
        console.log(formData);
    
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
      };
  return (
    <>
    <h1 className="text-white text-2xl md:text-6xl font-bold text-center mt-40">Contact with US</h1>
    <div className='flex items-center justify-center h-screen'>
      
        <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}   

          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}   

        />
      </div>
      <br />
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" className='flex justify-centera align-middle'>Submit</button>
    </form>   

       
      
      </Vortex>
    </div>
    </>
  )
}

export default page

'use client';
import Link from 'next/link';
import Image from 'next/image';
import {useState,useEffect} from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {

    const isUserLoggedIn = true;
    return(
    <nav  className='flex-between w-full mb-16 pt-3'>
        
        <Link href = '/' className='flex flex-between pt-3'> 
            <Image src= '/assets/images/logo.svg' height = {30} width = {30} className='object-contain'/>
            <p className=''>Ask anything</p>
        </Link>
       
        {/*mobile view*/}
        <div className='sm:flex hidden'>
            {isUserLoggedIn?(
                <div>
                    <Link href='/create-prompt' >create post </Link>
                    <button></button>
                </div>

            ):(
                <div>hello world is taken</div>
            )}

        </div>


    </nav>)

            }
export default Nav;
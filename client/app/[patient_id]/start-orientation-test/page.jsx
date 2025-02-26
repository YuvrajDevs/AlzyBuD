// app/page.jsx
'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import TaskHeading from '../../components/TaskHeading/TaskHeading';
import SubHeading from '../../components/SubHeading/SubHeading';
import Paragraph from '../../components/Paragraph/Paragraph';
import Btn from '../../components/Btn/Btn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {
    const params = useParams();
    const patient_id = params.patient_id;
    const router = useRouter();

    return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center">
            <TaskHeading heading="Orientation Test" />
            <SubHeading subhead="Let's check your orientation" />
            <div className="mt-8 max-w-2xl w-full">
                <Paragraph para="In this test, you'll be asked questions about time, place, and situation to assess your orientation." />
                <div className="mt-8 flex justify-center">
                    <Link href={`/${patient_id}/orientation-test/`} className='mt-12 py-2 rounded-lg text-white font-bold bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out px-20 '>
                    Start Test
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
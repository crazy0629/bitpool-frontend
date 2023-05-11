import { useDispatch } from 'react-redux';
import Table from '@/components/ChallengeTable';
import Modal from '@/components/ChallengeModal';
import { challengeActions } from '@/store/challenge';

const Challenge = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(challengeActions.setModalFlag({ flag: true, model: {} }));
    }

    return <>
    <div className='container mx-auto mt-24 px-4 lg:px-0'>
        <div className='flex flex-col justify-center items-center relative'>
            <div className='rounded-md border p-10'>
                <div className="flex flex-row justify-between items-center w-[64rem] border-b p-3">
                    <h2 className="text-white text-3xl">Admin Challenge</h2>
                    <button onClick={handleClick} className='text-white rounded-md px-4 py-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring-violet-300'>Admin Challenges</button>
                </div>
                <Table />
            </div>
        </div>
    </div>
    <Modal />
    </>
}

export default Challenge;
import { Header } from "@/components";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
<<<<<<< HEAD
=======
import { useSelector } from "react-redux";
import { IState } from "@/store";
import { notification } from "antd";
import { useRouter } from 'next/router'
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2

export default function Home() {
  const [uid, setUid] = useState(0);
  const [cid, setCid] = useState('');
<<<<<<< HEAD

=======
  const router = useRouter()
  const { currentUser } = useSelector((state: IState) => state.auth);
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2

  useEffect(() => {
    const getFromLocalStorage = (key: string) => {
      if (!key || typeof window === "undefined" || !localStorage) {
        return "";
      }
      return window.localStorage.getItem(key);
    };

    const cid: any = getFromLocalStorage("cid");
    const uid: any = Cookies.get('uid');
    setCid(cid);
    setUid(uid);
  }, []);

<<<<<<< HEAD
=======
  if(!currentUser) {
    notification.warning({ message: 'Warning!', description: 'Please Login!' });
    router.push('/');
    return;
  }

>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2
  return (
    <div className="w-full">
      <Header />

      <div className="min-h-90vh w-full game-dashboard">

      {uid && cid && <iframe src={`https://portal.bitpool.gg/?c=${cid}&u=${uid}`} frameBorder="0" className="game-iframe" id="iframe"></iframe>}

      </div>
    </div>
  );
}

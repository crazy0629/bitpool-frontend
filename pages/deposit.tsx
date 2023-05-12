import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { EmptyTransaction, Refresh } from "@/public/icons";
import classNames from "classnames";
import { useEffect, useState, useRef } from "react";
import Footer from "@/components/Footer";
import { IState } from "@/store";
import { SERVER_URI } from "@/config";
import { Table, notification } from "antd";
import { Header } from "@/components";
import Select from "@/components/Select";
import USDT from "@/public/usdt.png";
import QIC from "@/public/qc.png";
import Paypal from "@/public/paypal.png";
import BUSD from "@/public/busd.png";
import BITP from "@/public/bitp.png";
import CAKE from "@/public/cake.png";
import { authActions } from "@/store/auth";
import moment from "moment";
import jwtDecode from "jwt-decode";

const DynamicQRCode = dynamic(() => import("@/components/QrCode"), {
  ssr: false,
});

const items = [
  {
    icon: BUSD,
    name: "BUSD",
  },
  {
    icon: USDT,
    name: "USDT",
  },
  {
    icon: CAKE,
    name: "CAKE",
  },
  // {
  //   icon: Paypal,
  //   name: "USD",
  // },
  // {
  //   icon: BITP,
  //   name: "BITP",
  // },
  // {
  //   icon: QIC,
  //   name: "Quest Credit",
  // },
];

const networks = [
  {
    name: "ETHEREUM",
  },
  {
    name: "BNB CHAIN",
  },
  {
    name: "TRON",
  },
];

// const navs = ["COIN", "AMOUNT", "ADDRESS", "TIME"];

const Deposit = () => {
  const [history, setHistory] = useState([]);
  const [coin, setCoin] = useState("BUSD");
  const [network, setNetwork] = useState("ETHEREUM");
  const icon = useRef<object>({});
  const { currentUser } = useSelector((state: IState) => state.auth);
  const dispatch = useDispatch();

  const getTransaction = () => {
    if (currentUser) {
      const payload = { network, coin, user: currentUser.id };
      Axios.post(`${SERVER_URI}/deposit`, payload).then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          dispatch(authActions.setCurrentUser(jwtDecode(res.data.token)));
          setHistory(res.data.model);
        } else {
          setHistory([]);
        }
      });
    } else {
      notification.warning({
        message: "Warning!",
        description: "Please login to",
      });
    }
  };

  // setTimeout(() => getTransaction(), 15000);

  if (coin !== "") {
    items.forEach((p) => {
      if (coin === p.name) {
        icon.current = p.icon;
      }
    });
  }

  useEffect(() => {
    if (coin === "USD") return;
    getTransaction();
  }, [coin, network]);

  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto px-4 lg:px-0">
        <div className="mt-16 lg:px-20 xl:px-40 grid grid-cols-1 lg:grid-cols-2 lg:gap-32 justify-center">
          <div>
            <div className="flex items-center gap-20">
              <h2 className="text-white font-bold text-2xl">DEPOSIT</h2>
              <button
                onClick={() => coin !== "PAYPAL"}
                className="flex lg:hidden bg-secondary-450 px-6 py-2 rounded-lg items-center text-white gap-3 font-bold text-base"
              >
                <div>REFRESH</div>
                <Refresh />
              </button>
            </div>
            <div className="mt-10">
              {coin && icon.current && (
                <Select
                  key={0}
                  name={coin}
                  icon={icon.current}
                  handleChange={(value) => {
                    setCoin(value);
                  }}
                  items={items}
                  label="SELECT COIN"
                />
              )}

              {coin !== "PAYPAL" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Select
                    key={1}
                    name={network}
                    handleChange={(value) => {
                      setNetwork(value);
                    }}
                    items={networks}
                    label="SELECT NETWORK"
                  />

                  <Select
                    key={2}
                    name={
                      currentUser.address &&
                      (network === "ETHEREUM"
                        ? currentUser.address.ether.address
                        : network === "BNB CHAIN"
                        ? currentUser.address.ether.address
                        : currentUser.address.tron.address)
                    }
                    label="ADDRESS"
                    hasCopy
                  />
                </motion.div>
              )}

              {coin === "PAYPAL" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={classNames(
                      "text-primary-1100 font-bold lg:text-base text-sm mb-1"
                    )}
                  >
                    AMOUNT
                  </div>
                  <motion.input
                    type="number"
                    className="rounded w-full font-medium text-lg text-white px-5 xl:px-8 h-16 bg-secondary-400 outline-none"
                  />
                </motion.div>
              )}

              <div className="mt-14">
                {network !== "PAYPAL" && (
                  <DynamicQRCode
                    qrValue={
                      currentUser.address &&
                      (network === "ETHEREUM"
                        ? currentUser.address.ether.address
                        : network === "BNB CHAIN"
                        ? currentUser.address.ether.address
                        : currentUser.address.tron.address)
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <button className="mb-12 hidden lg:flex bg-secondary-450 px-8 py-3 rounded items-center text-white gap-3 font-bold text-lg">
              <div onClick={() => getTransaction()}>REFRESH</div>
              <Refresh />
            </button>
            <p className="font-medium text-base text-white">
              • We require minimum 3 confirmations to complete the transaction.
              On average, each confirmation takes about 15 minutes. It can take
              more time depending on the PayPal network so do not worry and wait
              quietly.
            </p>
            <div className="text-white lg:mt-14 mt-10 underline font-bold text-lg">
              DEPOSIT HASN’T ARRIVED? Click here
            </div>
            <div className="lg:mt-14 mt-10 flex justify-between w-full">
              <div>
                <p className="text-base text-primary-1100 font-bold">
                  MINIMUM DEPOSIT
                </p>
                <p className="mt-2 text-white font-medium text-base">
                  MORE THAN 0.01 BUSD
                </p>
              </div>
              <div>
                <p className="text-base text-primary-1100 font-bold">
                  Expected arrival time
                </p>
                <p className="mt-2 text-white font-medium text-base">
                  LESS THAN 1 minute{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-14 xl:px-28">
          <div className="mt-14">
            <h3 className="xl:text-2xl text-lg font-bold text-white text-left">
              TRANSACTION HISTORY
            </h3>
            <div className="flex items-center gap-32 mt-6">
              <div className="grid grid-cols-4 items-center gap-20 xl:gap-28">
                {history.length && (
                  <Table
                    size="middle"
                    rowKey="_id"
                    dataSource={history}
                    pagination={false}
                    columns={[
                      { title: "COIN", dataIndex: "coin" },
                      { title: "AMOUNT", dataIndex: "amount" },
                      { title: "ADDRESS", dataIndex: "address" },
                      {
                        title: "TIME",
                        dataIndex: "date",
                        render: (text, record) =>
                          moment(text).format("YYYY-MM-DD"),
                      },
                    ]}
                  />
                )}
              </div>
            </div>
            {!history.length && (
              <div className="mt-20 flex w-full justify-center">
                <EmptyTransaction />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Deposit;

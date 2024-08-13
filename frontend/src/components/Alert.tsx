import Image from "next/image";
import toast, { Toast } from "react-hot-toast";
import alertIcon from "../../public/icons/alert.png";
import closeIcon from "../../public/icons/closeAlert.png";

interface Props {
  t: Toast;
  message: string;
}

export default function Alert({ t, message }: Props) {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } w-[327px] bg-[#FF4949] shadow-lg rounded-lg py-[19px] px-[16px] h-[66px] items-center pointer-events-auto flex flex-row justify-between lg:absolute lg:right-0`}
    >
      <div className="basis-1/5">
        <Image src={alertIcon} alt="Error message" width={24} height={24} />
      </div>

      <p className="basis-3/5 text-sm font-medium text-white tracking-tighter">
        {message}
      </p>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="basis-1/5 border border-transparent rounded-none rounded-r-lg flex items-center justify-center focus:outline-none focus:ring-2"
      >
        <Image src={closeIcon} alt="Dismiss error" width={24} height={24} />
      </button>
    </div>
  );
}

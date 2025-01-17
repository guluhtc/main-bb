import { signIn } from "next-auth/react";
import { useState } from "react";
// import { LightningBoltIcon } from "@heroicons/react/solid";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const SignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void signIn("email", { email: email });
  };

  return (
    <div className=" flex flex-col items-center justify-center px-4 py-2">
      
    {/*   <h1 className="mt-2 text-2xl sm:text-4xl text-center font-bold">
        Sign in to roomGPT
      </h1> */}
      <form
        className="mt-0 rounded-lg shadow-md bg-gray-600 px-4 py-6 sm:px-8 sm:py-8 space-y-6 w-full max-w-md"
        onSubmit={SignIn}
      >
        <div className="flex flex-col space-y-1">
        <h1 className="mb-5 text-2xl sm:text-4xl text-center font-bold">
        Sign in with Email
      </h1>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="dummy@gmail.com"
            className="py-2 px-4 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 focus:border-blue-400 focus:ring-blue-400 transition disabled:opacity-50 disabled:cursor-not-allowed text-black"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded-md text-white hover:bg-blue-400 bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 transition flex justify-center items-center"
        >
          Send Magic Link{" "}
          <svg
            // style="color: white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="ml-2 text-4xl"
            // class="bi bi-telegram"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
              fill="white"
            ></path>{" "}
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SignIn;

"use client"
// rettelse - import fra navitgation istedet for router grundet app directory
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      className="sm:rounded-full sm:p-1 sm:bg-fooPink-800 sm:hover:bg-fooPink-900 sm:w-max"
      type="button"
      onClick={() => router.back()}
      aria-label="Gå tilbage"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="40"
        fill="currentColor"
        className="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </button>
  );
}

import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remainingTime },
  ref
) {
  const dialog = useRef();
  console.log(remainingTime, targetTime);
  let percentage = Math.trunc(
    (targetTime - remainingTime / 1000) * (100 / targetTime)
  );
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        Your Score: <strong>{percentage}/100</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

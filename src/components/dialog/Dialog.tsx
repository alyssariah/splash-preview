import clsx from 'clsx';
import Image from 'next/image';

/**
 * Fade in modal as a reusable component
 */
export const Dialog = ({
  rejectButton,
  modalIcon,
  modalImage,
  confirmButton,
  modalTitle,
  importantText,
  modalSubtitle,
  modalContent,
  boxShadow,
  position,
  buttonFlex,
}: any) => {
  return (
    <div
      className={`relative z-[1] block box-border mx-auto my-0 top-[50%] translate-y-[-50%] w-[320px] p-[16px] rounded-lg bg-[#fff] overflow-hidden box-shadow--${boxShadow}`}
    >
      <label
        className="absolute top-0 right-0 w-[2rem] h-[2rem] leading-6 text-center cursor-pointer"
        htmlFor="dialog-state"
      ></label>
      {modalIcon && (
        <div
          className={clsx('text-[40px] text-primary flex w-[100%] mb-3', {
            ['justify-start']: position == 'left',
            ['justify-center']: position == 'center',
          })}
        >
          {modalIcon}
        </div>
      )}
      {modalImage && (
        <div className="rounded-md max-h-[170px] overflow-hidden flex justify-center items-center mb-3">
          <Image src={modalImage} alt="modal picture" />
        </div>
      )}
      <h2
        className={clsx('text-[18px] font-semibold', {
          ['text-left']: position == 'left',
          ['text-center']: position == 'center',
        })}
      >
        {modalTitle}
      </h2>
      {importantText && (
        <p
          className={clsx('text-body-sm text-primary font-bold mt-2', {
            ['text-left']: position == 'left',
            ['text-center']: position == 'center',
          })}
        >
          {importantText}
        </p>
      )}
      {modalSubtitle && (
        <p
          className={clsx('text-body-md font-semibold mt-2', {
            ['text-left']: position == 'left',
            ['text-center']: position == 'center',
          })}
        >
          {modalSubtitle}
        </p>
      )}
      <div
        className={clsx('text-body-md mt-2 mb-6 text-outline', {
          ['text-left']: position == 'left',
          ['text-center']: position == 'center',
        })}
      >
        {modalContent}
      </div>
      <div
        className={clsx('flex items-center justify-center mt-[20px] w-[100%]', {
          ['flex-row space-x-4']: buttonFlex == 'row',
          ['flex-col space-y-3']: buttonFlex == 'column',
        })}
      >
        {rejectButton && <span className="flex-grow w-[100%]">{rejectButton}</span>}
        {confirmButton && <span className="flex-grow w-[100%]">{confirmButton}</span>}
      </div>
    </div>
  );
};

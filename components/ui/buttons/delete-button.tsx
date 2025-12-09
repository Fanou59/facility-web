import { Trash } from "lucide-react";

type DeleteButtonProps = {
  onClick: () => void;
};
export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button onClick={onClick}>
      <Trash className="hover:text-orange-500 cursor-pointer text-red-500" />
    </button>
  );
}

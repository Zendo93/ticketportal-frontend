import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateButton(props) {
    const {onCreateHandler,
        event} = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={(e) => onCreateHandler(e, dispatch, navigate, event)} className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Vytvoriť
                </button>
            </div>
        </div>
    );
}
import ava from '../../assets/icons/avatar.png';

export const Avatar = ({avatar}) => {
    return (
        <div className="Avatar">
            <img src={avatar && ava}></img>
        </div>
    );
};
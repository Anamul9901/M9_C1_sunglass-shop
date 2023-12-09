import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";


const SocialLogin = () => {

    const {   googleLogin } = useContext(AuthContex);
 

    const handleSocialMedia = (media) => {
        media()
            .then(res => console.log(res.user))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button
                    onClick={() => handleSocialMedia(googleLogin)}
                    className="btn btn-sm btn-neutral">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;
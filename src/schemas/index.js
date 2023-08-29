import * as Yup from 'yup';
import "yup-phone";
const phoneRegExp = /^[0-9]{10}$/;
export const signUpSchema=Yup.object(
    {
        name:Yup.string().min(3).max(23).required("Please enter your name"),
        email:Yup.string().email().required("Please enter Your email"),
        desc:Yup.string().min(10).required("Please enter Description"),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        nameSub:Yup.string().min(3).max(23).required("Please enter your name"),
        emailSub:Yup.string().email().required("Please enter Your email"),
        descSub:Yup.string().min(10).required("Please enter Description"),
        phoneSub: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    }
)

import { useState } from "react";

const validateName = (fullname) => { return fullname && fullname.length < 50; }
const validatePhone = (phone) => { return phone.length >= 8 && phone.length <= 10 } // Sólo tel. de línea o celular de GBA - CABA
const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
const validateForm = (fullname, phone, email, confirmation) =>  {
    return validateName(fullname) && validatePhone(phone) && validateEmail(email) && email === confirmation;
}


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [isValidForm, setIsValidForm] = useState(false);

    /* Handlers */

    const handleNameChange = (e) => {
        setName(e.target.value);
        setIsValidForm(validateForm(e.target.value, phone, email, confirmEmail));
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setIsValidForm(validateForm(name, e.target.value, email, confirmEmail));
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValidForm(validateForm(name, phone, e.target.value, confirmEmail));
    }

    const handleConfirmEmailChange = (e) => {
        setConfirmEmail(e.target.value);
        setIsValidForm(validateForm(name, phone, email, e.target.value));
    }

    const handleConfirm = (event) => {
        event.preventDefault();
        const userData =
        {
            fullname: name,
            phone: phone,
            email: email
        };
        onConfirm(userData);
    }

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="form">
                <label className="label">Name and Surname:</label>
                <input
                    className="input"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
                <label className="label">Phone:</label>
                <input
                    className="input"
                    type="number"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <label className="label">Email:</label>
                <input
                    className="input"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                />
                <label className="label">Confirm Email:</label>
                <input
                    className="input"
                    type="text"
                    value={confirmEmail}
                    onChange={handleConfirmEmailChange}
                />
            </form>
            <button type="submit" className="button" disabled={!isValidForm}>Enviar</button>
        </div>
    )
}
export default CheckoutForm;
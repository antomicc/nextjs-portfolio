import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/form.module.scss';

const FormContact = () => {
	const [state, handleSubmit] = useForm('xvovdrvz');
	if (state.succeeded) {
		return <p>Thanks for contactme!</p>;
	}
	return (
		<div className='container'>
			<form className={styles.formC} onSubmit={handleSubmit}>
				<div className='inputSec'>
					<label htmlFor='name'>Your name</label>
					<input id='name' type='text' name='name' />
					<ValidationError prefix='Name' field='name' errors={state.errors} />
				</div>
				<div className='inputSec'>
					<label htmlFor='email'>Your Email</label>
					<input id='email' type='email' name='email' />
					<ValidationError prefix='Email' field='email' errors={state.errors} />
				</div>
				<div className='inputSec'>
					<label htmlFor='phone'>Your phone</label>
					<input id='phone' type='phone' name='phone' />
					<ValidationError prefix='Phone' field='phone' errors={state.errors} />
				</div>
				<div className='inputSec'>
					<label htmlFor='message'>Your Message</label>
					<textarea id='message' name='message' />
					<ValidationError prefix='Message' field='message' errors={state.errors} />
				</div>
				<button className='btn btn-brand' type='submit' disabled={state.submitting}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default FormContact;

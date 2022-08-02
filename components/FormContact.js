import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/dist/client/image';
import styles from '../styles/form.module.scss';

const FormContact = () => {
	const [state, handleSubmit] = useForm('xvovdrvz');
	if (state.succeeded) {
		return <p className={styles.thanks}>Thanks for contactme!</p>;
	}
	return (
		<section id='contact' className={styles.contactSSS}>
			<h2 className={styles.titleForm}>Get in touch!</h2>
			<div className={styles.contactSection}>
				<form className={styles.formC} onSubmit={handleSubmit}>
					<div className={styles.inputNames}>
						<div className={styles.inputSec}>
							<label htmlFor='name'>Your name</label>
							<input
								placeholder='ej. Robert'
								id='name'
								type='text'
								name='name'
							/>
							<ValidationError prefix='Name' field='name' errors={state.errors} />
						</div>
						<div className={styles.inputSec}>
							<label htmlFor='last_name'>Your last name</label>
							<input
								placeholder='ej Downey'
								id='last_name'
								type='text'
								name='last_name'
							/>
							<ValidationError prefix='Last_name' field='last_name' errors={state.errors} />
						</div>
					</div>
					<div className={styles.inputSec}>
						<label htmlFor='email'>Your Email</label>
						<input
							placeholder='ej. hola@mundo.com'
							id='email'
							type='email'
							name='email'
						/>
						<ValidationError prefix='Email' field='email' errors={state.errors} />
					</div>
					<div className={styles.inputSec}>
						<label htmlFor='message'>Your Message</label>
						<textarea placeholder='Hello world :)' id='message' name='message' />
						<ValidationError
							prefix='Message'
							field='message'
							errors={state.errors}
						/>
					</div>
					<button
						className='btn btn-brand'
						type='submit'
						disabled={state.submitting}
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default FormContact;

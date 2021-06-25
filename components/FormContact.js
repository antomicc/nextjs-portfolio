import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/form.module.scss';
import RocketSVG from '../components/svgs/animationSVG/RocketSVG';

const FormContact = () => {
	const [state, handleSubmit] = useForm('xvovdrvz');
	if (state.succeeded) {
		return <p>Thanks for contactme!</p>;
	}
	return (
		<div className='container'>
			<h2 className={styles.titleForm}>Get in touch!</h2>
			<div className={styles.contactSection}>
				<div className={styles.ilustContainer}>
					<RocketSVG />
				</div>
				<form className={styles.formC} onSubmit={handleSubmit}>
					<div className={styles.inputSec}>
						<label htmlFor='name'>Your name</label>
						<input
							placeholder='ej. Robert Downey'
							id='name'
							type='text'
							name='name'
						/>
						<ValidationError prefix='Name' field='name' errors={state.errors} />
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
						<label htmlFor='phone'>Your phone</label>
						<input
							placeholder='ej +56 78797788787'
							id='phone'
							type='phone'
							name='phone'
						/>
						<ValidationError prefix='Phone' field='phone' errors={state.errors} />
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
		</div>
	);
};

export default FormContact;

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import newTrip from '../axios-routes';

const AddTrip = () => {
	const [time, setTime] = useState();
	const [store, setStore] = useState();
	const [quantity, setQuantity] = useState();
	const [container, setContainer] = useState();
	const [area, setArea] = useState();

	const handleSubmit = e => {
		e.preventDefault();

		const addTrip = {
			area: area,
			time: time,
			store: store,
			container: container,
			quantity: quantity,
		};
		// newTrip(addTrip);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group id='area'>
					<Form.Label>Area</Form.Label>
					<Form.Control
						type='text'
						value={area}
						required
						onChange={e => setArea(e.target.value)}
					/>
				</Form.Group>
				<Form.Group id='time'>
					<Form.Label>When?</Form.Label>
					<Form.Control
						type='number'
						value={time}
						required
						onChange={e => setTime(e.target.value)}
					/>
				</Form.Group>
				<Form.Group id='store'>
					<Form.Label>Where?</Form.Label>
					<Form.Control
						type='text'
						value={store}
						required
						onChange={e => setStore(e.target.value)}
					/>
				</Form.Group>
				<Form.Group id='quantity' inline>
					<Form.Label>How much are you willing to shlep?</Form.Label>
					<Form.Control
						type='number'
						value={quantity}
						required
						inline
						onChange={e => setQuantity(e.target.value)}
					/>
					<Form.Check
						inline
						name='container'
						label='Item(s)'
						type='radio'
						value={container === 'Item'}
						onClick={() => setContainer('Item')}
					/>
					<Form.Check
						inline
						name='container'
						label='Bag(s)'
						type='radio'
						value={container === 'Bag'}
						onClick={() => setContainer('Bag')}
					/>
					<Form.Check
						inline
						name='container'
						label='Truck(s)'
						type='radio'
						value={container === 'Truck'}
						onClick={() => setContainer('Truck')}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} className='button' type='submit'>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default AddTrip;
import React, { useState } from 'react';
import './ProfileForm.scss';
export interface ProfileFormProps {
	postUserData: Function;
	username: string
}

const ProfileForm: React.SFC<ProfileFormProps> = ({ postUserData, username }) => {
	const [ lastOvulation, setLastOvulation ] = useState('');
  const [ avgCycleLength, setAvgCycleLength ] = useState('');
	const [ avgPeriodLength, setAvgPeriodLength ] = useState('');

	const handleSubmit = async (event: any) => {
    event.preventDefault();
    postUserData(lastOvulation, avgCycleLength, avgPeriodLength, username);
	}

  return (
			<form className='profile-form'>
				<label>First Day of Last Period:
					<input
            name='lastOvulation'
					  type='date'
					  placeholder='mm/dd/yyyy'
					  value={lastOvulation}
            aria-label='last-ovulation-input'
            data-testid='date'
					  onChange={e => setLastOvulation(e.target.value)} 
				  />
				</label>
        <label>Average Cycle Length:
					<input
            name='avgCycleLength'
					  type='number'
					  placeholder='28 Days'
					  value={avgCycleLength}
					  aria-label='average-cycle-length-label'
					  onChange={e => setAvgCycleLength(e.target.value)} 
					/>
				</label>
        <label>Average Period Length:
					<input
            name='avgPeriodLength'
					  type='number'
					  placeholder='7 Days'
					  value={avgPeriodLength}
					  aria-label='average-period-length-input'
					  onChange={e => setAvgPeriodLength(e.target.value)} 
					/>
				</label>
				<button 
          onClick={handleSubmit}
          type='button'
        >
          SUBMIT
        </button>
			</form>
  )
}

export default ProfileForm;
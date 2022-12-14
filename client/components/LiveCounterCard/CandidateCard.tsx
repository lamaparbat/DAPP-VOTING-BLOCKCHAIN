import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setCandidateDetails } from '../../redux/candidateReducer';
import Avatar from '../Avatar';
import { CandidateCardStruct } from '../../interfaces/index';
import FilterIcon from '../FilterIcon';


const CandidateCard: React.FC<CandidateCardStruct> = (props) => {
 const { details, border, ishighlighted } = props;

 // redux dispatcher
 const dispatch = useDispatch();
 const router = useRouter();

 const openDetails = (details) => {
  dispatch(setCandidateDetails(details));
  router.push("/party/details");
 }

 return (
  <div
   className={`card__candidates py-1 pe-4 pb-2 rounded-1 cursor-pointer ${border} ${ishighlighted && 'bg-slate-50 drop-shadow-md'}`}
   onClick={() => openDetails(details)}
  >
   <div className='ml-4 mt-1 d-flex items-center justify-between'>
    <div className='d-flex items-center'>
     <Avatar className='avatar' src="/images/parbat.png" alt="profile" size='md' border={2} />
     <div className='px-3'>
      <h6 className='text-[16px]'>{details?.name}</h6>
      <div className='d-flex items-center -mt-[5px]'>
       <FilterIcon party={details.party} />
       <span className='mx-2 text-sm text-slate-600'>{details.party}</span>
      </div>
     </div>
    </div>
    <h5 className='ml-[5px]' id='count'>{details.votes}</h5>
   </div>
  </div>
 )
}

export default CandidateCard;

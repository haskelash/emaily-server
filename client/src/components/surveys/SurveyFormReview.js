//SurveyFormReview show users their form inputs for review
import React from 'react'

export default ({ onCancel }) => {
  return (
    <div>
      <h5>Review</h5>
      <button
        className="yellow darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  )
}

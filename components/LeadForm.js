import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Contact Information',
    fields: [
      { label: 'Full Name', name: 'fullName', type: 'text', required: true },
      { label: 'Email Address', name: 'email', type: 'email', required: true }
    ]
  },
  {
    id: 2,
    title: 'Investment & Timeline',
    fields: [
      {
        label: 'Approximate Investment Amount',
        name: 'investment',
        type: 'select',
        required: true,
        options: [
          'Under $100K',
          '$100K - $250K',
          '$250K - $500K',
          '$500K - $1M',
          '$1M+'
        ]
      },
      {
        label: 'When do you plan to start?',
        name: 'timeline',
        type: 'select',
        required: true,
        options: [
          '1-3 months',
          '3-6 months',
          '6-12 months',
          'Not yet sure'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Business Type & Preferences',
    fields: [
      {
        label: 'What type of business interests you?',
        name: 'businessType',
        type: 'multiselect',
        required: true,
        options: [
          'Franchise',
          'Existing Business Acquisition',
          'Startup Business',
          'Tech/Software Company',
          'Import/Export',
          'Consulting',
          'Other'
        ]
      },
      {
        label: 'Who would you prefer to talk to?',
        name: 'preferredContact',
        type: 'select',
        required: true,
        options: [
          'Immigration Attorney',
          'Business Formation Service',
          'Franchise Consultant',
          'Business Broker',
          'All'
        ]
      }
    ]
  }
];

export default function LeadForm({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    investment: '',
    timeline: '',
    businessType: [],
    preferredContact: ''
  });

  function handleInputChange(e) {
    const { name, value, type, options } = e.target;
    if (type === 'select-multiple') {
      const selectedOptions = Array.from(options).filter(o => o.selected).map(o => o.value);
      setFormData(prev => ({ ...prev, [name]: selectedOptions }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }

  function validateStep() {
    const step = steps.find(s => s.id === currentStep);
    for (const field of step.fields) {
      if (field.required) {
        const value = formData[field.name];
        if (Array.isArray(value) && value.length === 0) {
          alert(`Please select at least one option for "${field.label}"`);
          return false;
        } else if (!value) {
          alert(`Please fill out the "${field.label}" field`);
          return false;
        }
      }
    }
    return true;
  }

  async function nextStep() {
    if (!validateStep()) return;
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final Step - submit
      if (typeof onSubmit === 'function') {
        await onSubmit(formData);
      } else {
        // Default: submit to API
        try {
          const response = await fetch('/api/lead-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert('Thank you! Your information has been submitted.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('There was an error submitting your form. Please try again.');
        }
      }
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  const step = steps.find(s => s.id === currentStep);

  return (
    <div style={{
      maxWidth: 480,
      margin: '0 auto',
      padding: 24,
      backgroundColor: '#F5F5F5',
      borderRadius: 12,
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      fontFamily: "'Inter', sans-serif",
      color: '#1A1A1A'
    }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 20 }}>
        Step {currentStep} of {steps.length}: {step.title}
      </h2>

      <form onSubmit={e => { e.preventDefault(); nextStep(); }}>
        {step.fields.map(field => {
          if (field.type === 'text' || field.type === 'email') {
            return (
              <div key={field.name} style={{ marginBottom: 16 }}>
                <label htmlFor={field.name} style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>
                  {field.label} {field.required && '*'}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required={field.required}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: 6,
                    border: '1px solid #ccc',
                    fontSize: 16
                  }}
                />
              </div>
            );
          } else if (field.type === 'select') {
            return (
              <div key={field.name} style={{ marginBottom: 16 }}>
                <label htmlFor={field.name} style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>
                  {field.label} {field.required && '*'}
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required={field.required}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: 6,
                    border: '1px solid #ccc',
                    fontSize: 16
                  }}
                >
                  <option value="">Select...</option>
                  {field.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            );
          } else if (field.type === 'multiselect') {
            return (
              <div key={field.name} style={{ marginBottom: 16 }}>
                <label htmlFor={field.name} style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>
                  {field.label} {field.required && '*'}
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  multiple
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required={field.required}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: 6,
                    border: '1px solid #ccc',
                    fontSize: 16,
                    height: 120
                  }}
                >
                  {field.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            );
          }
          return null;
        })}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            style={{
              backgroundColor: '#ccc',
              border: 'none',
              borderRadius: 6,
              padding: '10px 24px',
              fontWeight: 600,
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
            }}
          >
            Back
          </button>
          <button
            type="submit"
            style={{
              backgroundColor: '#00AA44',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '10px 24px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {currentStep < steps.length ? 'Next' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}


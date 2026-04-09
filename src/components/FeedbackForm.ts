import '../assets/styles/components/_feedback.scss';
import '../assets/styles/components/_forms.scss';

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function FormField(props: FormFieldProps): string {
  const { id, label, type = 'text', placeholder = '', required = false } = props;
  const fieldType = type === 'textarea' ? 'textarea' : 'input';
  const requiredMark = required ? '<span class="form-field__star">*</span>' : '';
  const requiredAttr = required ? 'required' : '';
  let field  =`<input class="form-field__input" id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" ${requiredAttr}>`;

  if (fieldType === 'textarea') {
    field  =`<textarea class="form-field__textarea" id="${id}" name="${id}" placeholder="${placeholder}" ${requiredAttr}></textarea>`;
  }

  return `
    <div class="form-field">
      <label class="form-field__label" for="${id}">${label} ${requiredMark}</label>
      ${field}
      <span class="form-field__notify"></span>
    </div>
  `;
}

function validateForm(formData: FormData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const name = formData.get('userName') as string;
  const email = formData.get('userEmail') as string;
  const message = formData.get('userMessage') as string;

  if (!name || name.trim().length < 2) {
    errors.userName = 'Name must be at least 2 characters';
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.userEmail = 'Please enter a valid email';
  }

  if (!message || message.trim().length < 5) {
    errors.userMessage = 'Message must be at least 5 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

function validateField(fieldId: string, value: string): string | undefined {
  const trimmed = value.trim();

  if (fieldId === 'userName' && (!trimmed || trimmed.length < 2)) {
    return 'Name must be at least 2 characters';
  }

  if (fieldId === 'userEmail' && (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))) {
    return 'Please enter a valid email';
  }

  if (fieldId === 'userMessage' && (!trimmed || trimmed.length < 5)) {
    return 'Message must be at least 5 characters';
  }

  return undefined;
}

function displayError(fieldId: string, message: string): void {
  const field = document.getElementById(fieldId);
  const formField = field?.closest('.form-field');
  const notify = formField?.querySelector('.form-field__notify');

  if (formField && notify) {
    formField.classList.add('form-field--error');
    notify.textContent = message;
  }
}

function clearErrors(): void {
  const formFields = document.querySelectorAll('.form-field');
  formFields.forEach((field) => {
    field.classList.remove('form-field--error', 'form-field--success');
    const notify = field.querySelector('.form-field__notify');
    if (notify) notify.textContent = '';
  });
}

function clearFieldError(fieldId: string): void {
  const field = document.getElementById(fieldId);
  const formField = field?.closest('.form-field');
  const notify = formField?.querySelector('.form-field__notify');

  if (formField && notify) {
    formField.classList.remove('form-field--error');
    notify.textContent = '';
  }
}

export function initFeedbackForm(): void {
  const form = document.querySelector('.feedback__form') as HTMLFormElement;
  if (!form) return;

  const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
  fields.forEach((field) => {
    field.addEventListener('blur', () => {
      const error = validateField(field.id, field.value);
      if (error) {
        displayError(field.id, error);
      } else {
        clearFieldError(field.id);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    const formData = new FormData(form);
    const { valid, errors } = validateForm(formData);

    if (!valid) {
      Object.entries(errors).forEach(([fieldId, message]) => {
        displayError(fieldId, message);
      });
      return;
    }

    // Form is valid - submit data
    console.log('Form submitted:', Object.fromEntries(formData));
    form.reset();
  });
}

export function FeedbackForm(): string {
  return `
    <section class="feedback">
      <h3 class="feedback__title">Get in Touch</h3>
      <form action="" class="feedback__form">
        ${FormField({ id: 'userName', label: 'Name', type: 'text', placeholder: 'Name', required: true })}
        ${FormField({ id: 'userEmail', label: 'Email', type: 'email', placeholder: 'Email', required: true })}
        ${FormField({ id: 'userMessage', label: 'Message', type: 'textarea', placeholder: 'Your message', required: true })}
        <button type="submit" class="button button--full">Send Message</button>
      </form>
    </section>
  `;
}
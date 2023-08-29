# 🏋🏻‍♀️Workout Wiz🏋🏻‍♀️
### Live Link
[Workout Wiz <----- 🏃🏼](https://workout-wiz-janica-a1b51874fc5c.herokuapp.com/)
## Description
"Workout Wiz" is a fitness application designed to help users on their fitness journey. The app offers a range of exercise categories and a variety of exercises within each category. Users can explore these exercises to plan their workouts and achieve their fitness goals!

## Preview

Home Page:
![Home Page](images/Screenshot%202023-08-29%20at%202.33.01%20AM.png)

![Exercise Categories](images/Screenshot%202023-08-29%20at%209.15.25%20AM.png)

![Exercises](images/Screenshot%202023-08-29%20at%209.15.05%20AM.png)

![Exercise Description](images/Screenshot%202023-08-29%20at%209.15.14%20AM.png)

## Code Preview

Favorite Component: 

```jsx
export default function ProgressForm({ onSubmit }) {
  const initialFormData = {
    date: '',
    exercise: '',
    weight: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleInputChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log('Form Data:', formData);
    onSubmit(formData);
    setFormData(initialFormData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='progress-form'>
        <label>
          Date:
          <input
            type="date"
            name="date"
            class="form-control"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Exercise:
          <input
            type="text"
            name="exercise"
            class="form-control"
            value={formData.exercise}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            class="form-control"
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            class="form-control"
            value={formData.description}
            onChange={handleInputChange}
            cols="30"
            rows="10"
            required
          />
        </label>
        <button className='btn btn-success' type="submit">Submit</button>
      </form>
    </div>
  );
}
```
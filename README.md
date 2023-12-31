# 🏋🏻‍♀️Workout Wiz🏋🏻‍♀️
### Live Link
[Workout Wiz <----- 🏃🏼](https://workout-wiz-janica-a1b51874fc5c.herokuapp.com/)
## Description
"Workout Wiz" is a fitness application designed to help users on their fitness journey. The app offers a range of exercise categories and a variety of exercises within each category. Users can explore these exercises to plan their workouts and achieve their fitness goals!

## Preview

Home Page:
![Home Page](Images/Screenshot%202023-08-29%20at%202.33.01%20AM.png)

![Exercise Categories](Images/Screenshot%202023-08-29%20at%209.15.25%20AM.png)

![Exercises](Images/Screenshot%202023-08-29%20at%209.15.05%20AM.png)

![Exercise Description](Images/Screenshot%202023-08-29%20at%209.15.14%20AM.png)

## Technologies Used
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node JS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## Code Preview

Favorite Model :
```js
const progressSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    exercise: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    description: String,
})

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
```

Favorite Controller:
```js
module.exports = {
    create,
    getProgress,
};

async function create(req, res) {
    console.log('recieved data', req.body);
    try {
        const newProgress = await Progress.create(req.body);
        res.json(newProgress);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function getProgress(req, res) {
    try {
        const allProgress = await Progress.find();
        res.json(allProgress);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching progress' });
    }
}
```

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

## Icebox Features
- Add pictures for each exercise category
- Save exercises as favorites
- Add a nutrition component to track nutrition
- Let users create their own exercises and add it to the list

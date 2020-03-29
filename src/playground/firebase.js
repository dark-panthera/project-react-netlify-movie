import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBiw3-QN3x7-KwIaSMFT_1-dEvboU1S_A",
  authDomain: "expensify-d681d.firebaseapp.com",
  databaseURL: "https://expensify-d681d.firebaseio.com",
  projectId: "expensify-d681d",
  storageBucket: "expensify-d681d.appspot.com",
  messagingSenderId: "682158007478",
  appId: "1:682158007478:web:887071f5651c5245b4f217",
  measurementId: "G-6D2XJW5GCT"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

/*
const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})
*/

/*
database.ref("expenses").on("value", snapshot => {
  const expenses = [];

  snapshot.forEach(childSnapshot => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log(expenses);
});
*/

/*
database
  .ref("expenses")
  .once("value")
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    
    console.log(expenses);
  });
  */

/*
database.ref("expenses").push({
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: 976123498763
  });
  database.ref("expenses").push({
    description: "Phone Bill",
    note: "",
    amount: 5900,
    createdAt: 976123498763
  });
  database.ref("expenses").push({
    description: "Food",
    note: "",
    amount: 1200,
    createdAt: 976123498763
  });
*/

/*
database.ref('notes/-M3XleegZ1Ru9l0c0gWz').update({
    body: 'Buy food'
})
*/

// database.ref('notes/-M3XleegZ1Ru9l0c0gWz').remove();

/*
database.ref("notes").push({
  title: "Course Topics",
  body: "React Native, Angular, Python"
});
*/

/*
const firebaseNotes = {
  notes: {
    abcsafsad: {
      title: "First note!",
      body: "This is my note"
    },
    abcsafsadafsdsad: {
      title: "Another note",
      body: "This is my note"
    }
  }
};

const notes = [
  {
    id: "12",
    title: "First note!",
    body: "This is my note"
  },
  {
    id: "761ase",
    title: "Another note",
    body: "This is my note"
  }
];

database.ref("notes").set(notes);
database.ref("notes");
*/

/*
//----------------- Data Subscription -----------------//

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

-----------------------------------------------

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref('age').set(28);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);
*/

/*
//----------------- Data Subscription -----------------//

const database = firebase.database();

const onValueChange = (snapshot) => {
    console.log(snapshot.val());
}

database.ref().on('value', onValueChange);

setTimeout(() => {
    database.ref('age').set(28);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);

*/

/*
database.ref('location/city').once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
}).catch((e) => {
    console.log('Error fetching data', e);
})
*/

/*

//----------------- Set / Update -----------------//

database
  .ref()
  .set({
    name: "Julian Cutajar",
    age: 27,
    stressLevel: 6,
    // isSingle: false,
    job: {
      title: "Software developer",
      company: "Google"
    },
    location: {
      city: "Philadelphia",
      country: "Malta"
    }
  })
  .then(() => {
    console.log("Data is saved");
  })
  .catch(e => {
    console.log("This failed", e);
  });
  */
/*
database.ref().update({
    name: 'Mike Cutajar',
    age: 29,
    job: 'Software developer',
    isSingle: null
});
*/
/*
database.ref().update({
  job: "Manager",
  "location/city": "Boston"
});
*/
/*
database
  .ref()
  .update({
    stressLevel: 9,
    "job/company": "Amazon",
    "location/city": "Seattle"
  })
  .then(() => {
    console.log("Data is saved");
  })
  .catch(e => {
    console.log("This failed", e);
  });
*/
/*
database.ref().update({
    job: 'Manager',
    'location': {
        city: 'Boston'
    }
});
*/
/*
//----------------- remove -----------------//

database.ref('isSingle').set(null);

database
  .ref("isSingle")
  .remove()
  .then(() => {
    console.log("Removed succesful");
  })
  .catch(e => {
    console.log("Remove failed", e.message);
  });
*/

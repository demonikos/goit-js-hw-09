import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
// const start = document.querySelector('button');
const inputForm = document.querySelector('form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

//-------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

//-------------------------------------------------------------------------------

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// console.log(inputForm)

//-------------------------------------------------------------------------------

// inputForm.addEventListener('submit', event => {
//   event.preventDefault();

//   const delay = inputDelay.value;
//   const step = inputStep.value;
//   const amount = inputAmount.value;

//   console.log(`delay` + delay, `step` + step, `amount` + amount);
// }
// )

//-------------------------------------------------------------------------------

inputForm.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(inputDelay.value);
  const step = Number(inputStep.value);
  const amount = Number(inputAmount.value);

  // if (Number(delay) === "" || Number(step) === "" || Number(amount) === "") {
  //   Notify.warning(`Values can't be empty, please, fill in the fields!`);
  // } else if (delay < 0 || step < 0 || amount < 0) {
  //     Notify.warning(`Values can't be negative, please, correct fill in the fields!`);
  //   } else {
  //     Notify.success(`delay + ${delay}, step + ${step}, amount + ${amount}`);

  //   }
  // }

  if (Number(delay) < 0 || Number(step) < 0 || Number(amount) < 0) {
    Notify.warning(
      `Values can't be negative, please, correct fill in the fields!`
    );
  } else if (Number(amount) === 0) {
    Notify.warning(`Amount can't be zero, please, fill in correct value!`);
  } else {
    // Notify.success(`delay + ${delay}, step + ${step}, amount + ${amount}`);

    for (let i = 0; i < amount; i++) {
      createPromise(i, delay + step * i)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
        });
    }
  }
});
// Notify.success(`delay + ${delay}, step + ${step}, amount + ${amount}`);

// for (let i=1; i<=amount; i++){

// createPromise(i, delay + step*i)
// .then(({ position, delay }) => {
//   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(({ position, delay }) => {
//   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// });

// }
// }
// )
//   // createPromise(3, 1000)
//   // .then(({ position, delay }) => {
//   //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   // })
//   // .catch(({ position, delay }) => {
//   //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   // });
// })

// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

//     text, una stringa che indica il testo del todo
//     done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.

const { createApp } = Vue 

createApp ({
    data(){
        return{
            newTask: '',
            inputError: false,
            // creiamo un array di oggetti per la to do list 
            listToDo:[

                {
                    text : 'fare la spesa',
                    done : false
                },
                {
                    text : 'fare il bucato',
                    done : true
                },
                {
                    text : 'fare il letto',
                    done : false
                }

            ]
        }
    },

    methods: {
        // MILESTONE 3
        // Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
        // aggiungo un elemento all'array 
        addTask() {
            if (this.newTask !== '' && this.newTask.lenght >=5
            ) {
                this.listToDo.unshift({text:this.newTask});
                this.inputError = false;
            } else {
                this.inputError = true;
            }
          
            this.newTask ='';
        },
        // MILESTONE 2
        // Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
        // rimuovo un elemento utilizzando l'item 
        removeTask(index){
            this.listToDo.splice(index, 1);
        },
        // Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
    },
}).mount('#app')




// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.




// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista


// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)Buon lavoro e buon divertimento! :lino-banfi2:

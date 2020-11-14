var app = new Vue({
    el: "#app",
    data: {
        message: "Hello World!",
        seen: false,
        todos: [
            { 
                text: "Comprare il latte"
            },
            { 
                text: "Comprare il tofu"
            },
            { 
                text: "Comprare il prosciutto"
            },
            { 
                text: "Comprare il pane"
            }
        ],
        newTodo: "",
    }, 
    methods: {
        toggleAccordion() {
            this.seen = !this.seen;
        },
        deleteTodo(elm) {
            this.todos.splice(elm, 1);
        },
        createTodo(elm) {
            var elm = {
                text: this.newTodo
            }
            this.todos.push(elm);
            this.newTodo="";
        },
        changeTodo() {
            //
        }
    }
})
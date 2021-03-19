let app = new Vue({
    el: "#vueApp",
    data: {
        showAddPopup: false,
        name: 'Name',
        tasks: [],
        newTask: '',
        newName: '',
        welcomeMessage: '\'s TODO List',
        showUF: true,
        showF: true,
    },
    methods: {
        /* Updates showUF (showUF) variable */
        hideUnfinished: function() {
            if (this.showUF == false) {
                this.showUF = true
            } else {
                this.showUF = false
            }
            console.log("hideUnfinished = " + this.showUF)
        },
        hideFinished: function() {
            if (this.showF == false) {
                this.showF = true
            } else {
                this.showF = false
            }
            console.log("hideFinished = " + this.showF)
        },
        updateStatus(el) {
            if (el.completed == true) {
                el.completed = false
            } else {
                el.completed = true
            }
            console.log(el.completed)
        },
        deleteTask(x) {
            console.log("length = " + this.tasks.length)
            let newList = []
            for (let i = 0; i < this.tasks.length; ++i) {
                console.log("1")
                if (x.task != this.tasks[i].task) {
                    console.log("2")
                    newList.push(this.tasks[i])
                }
            }
            this.tasks = newList
            console.log("length = " + this.tasks.length)
        },
        addLoginName: function() {
            if (this.newName !== '') {
                // Create a new list instance
                //const newList = {id: id, name: this.newName}
                // Add it to the array
                this.name = this.newName
                // Turn the newName back into an empty string
                this.newName = ''
                window.location.href = "index.html"
            }
        },
        addTask: function() {
            console.log("Add")
            let id = this.tasks.length + 1
            if (this.newTask !== '') {
                // Create new list instance
                const newList = {id: id, task: this.newTask, completed: false}
                // Add it array
                this.tasks.push(newList)
                // Turn the newTask back into empty string
                this.newTask = ''
            }
        }
    },
    mounted() {

    },
});
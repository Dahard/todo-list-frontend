<template>
    <div class="main-page">
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    <v-card class="mx-auto" max-width="300" tile>
                        <v-list rounded>
                            <h3 v-if="user">Hejka, {{user.result.userName}}</h3>
                            <h3 v-if="!user">Nie jesteś zalogowany!</h3>
                            <v-subheader>Twoja lista ToDo</v-subheader>
                            <v-list-item-group v-model="selectedItem" color="primary">
                                <v-list-item v-for="todo in todos" :key="todo" :class="{ done: todo.isDone }"
                                    @click="todo.isDone = !todo.isDone">
                                    <template v-slot:default="{ active }">
                                        <v-list-item-action>
                                            <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="todo.thingToDo"></v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                        <v-btn color="deep-purple lighten-2" text @click="removeAllToDos">
                            Wyczyść listę
                        </v-btn>
                        <v-card-actions>
                            <v-text-field placeholder="Dodaj coś nowego" id="input" name="input"
                                v-model="newToDo.thingToDo" clearable rounded></v-text-field>
                            <v-btn color="deep-purple lighten-2" text @click="addToDo">
                                Dodaj
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-col cols="12">
                    <v-card class="mx-auto" max-width="300" tile>
                        <v-list rounded>
                            <v-subheader>Archiwum</v-subheader>
                            <v-list-item-group v-model="selectedItem" color="primary">
                                <v-list-item v-for="todo in archivedTodos" :key="todo" :class="{ done: todo.isDone }"
                                    @click="todo.isDone = !todo.isDone">
                                    <template v-slot:default="{ active }">
                                        <v-list-item-action>
                                            <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="todo.thingToDo"></v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                        <v-btn color="deep-purple lighten-2" text @click="removeArchivedToDos">
                            Wyczyść archiwum
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>


export default {

    name: 'MainPage',

    props: ['user'],

    data: () => ({
        todos: [],
        archivedTodos: [],
        newToDo: {},
        selectedItem: 1,
        // user: null
    }),

    // async created() {
    //     const response = await axios.get('/api/ToDoItem/3');
        
    //     this.user = response.data;
    
    // },

    methods: {


        addToDo: function () {
            if (this.newToDo.thingToDo) {
                this.newToDo.isDone = false;
                this.todos.push(this.newToDo);
                console.log(this.todos);
                this.newToDo = {};
            } else {
                alert("Gościu... Wypełnij pola.")
            }
        },
        removeAllToDos: function () {
            console.log("Todos before wiping" + this.todos);
            this.archivedTodos = this.todos;
            this.todos = [];
            console.log("Todos after wiping" + this.todos);
        },

        removeArchivedToDos: function () {
            console.log("Archived before wiping" + this.archivedTodos);
            this.archivedTodos = [];
            console.log("Archived after wiping" + this.archivedTodos);
        }
    }
}
</script>

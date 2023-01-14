<template>
    <div class="main-page">
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-card class="mx-auto" max-width="300" tile>
                    <v-list rounded>
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

                    <v-btn color="deep-purple lighten-2" text @click="removeAllToDos()">
                        Wyczyść listę
                    </v-btn>

                    <v-card-actions>
                        <v-text-field placeholder="Dodaj coś nowego" id="input" name="input" v-model="newToDo.thingToDo"
                            clearable rounded></v-text-field>
                        <v-btn color="deep-purple lighten-2" text @click="addToDo()">
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

                    <v-btn color="deep-purple lighten-2" text @click="removeAllToDos()">
                        Wyczyść listę
                    </v-btn>

                    <v-card-actions>
                        <v-text-field placeholder="Dodaj coś nowego" id="input" name="input" v-model="newToDo.thingToDo"
                            clearable rounded></v-text-field>
                        <v-btn color="deep-purple lighten-2" text @click="addToDo()">
                            Dodaj
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>

export default {

    name: 'MainPage',

    data: () => ({
        todos: [],
        archivedTodos: [],
        newToDo: {},
        selectedItem: 1,
    }),

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
            this.archivedTodos.push(this.todos);
            this.todos = [];
        }
    }
}
</script>

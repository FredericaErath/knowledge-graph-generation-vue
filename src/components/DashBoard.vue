<template>
    <v-app>
        <v-main>
            <v-container fluid class="part1">
                <div class="title">
                    <h1>Video Lecture Report</h1>
                    <p></p>
                    <p>This is a general report of your uploaded lecture.</p>
                    <div class="button1">
                        <v-btn class="mx-2" fab dark color="indigo" @click="jump">
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                        <h5 color="indigo">LEARN ABOUT KNOWLEDGE GRAPH</h5>
                    </div>
                </div>
                <div class="cards">
                    <v-card flat>
                        <v-card-title>
                            Full text
                        </v-card-title>
                        <v-card-text>
                            <p>
                                {{ text }}
                            </p>
                        </v-card-text>
                    </v-card>
                </div>
            </v-container>
            <v-container class="table">
                <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                    <template v-slot:[`item.number`]="{ item }">
                        <v-chip :color="getColor(item.number)" dark>{{ item.number }}</v-chip>
                    </template>
                    <template v-slot:[`item.explanation`]="{ item }">
                        <a>{{ item.explanation }}</a>
                    </template>
                </v-data-table>
            </v-container>
            <v-container>
                <h3 style="margin-top: 2%;">Overview</h3>
                <div class="overview">
                    <v-card style="width: 700px;">
                        <Plotly :data="plot1_msg" :display-mode-bar="true" :layout="layout"> </Plotly>
                    </v-card>
                    <v-card style="width: 500px; margin-left: 2%;">
                        <Plotly :data="plot2_msg" :display-mode-bar="true" :layout="layout"> </Plotly>
                    </v-card>
                    <v-card style="width: 500px; margin-left: 2%;">
                        <Plotly :data="plot3_msg" :display-mode-bar="true" :layout="layout"> </Plotly>
                    </v-card>
                </div>
            </v-container>
        </v-main>

    </v-app>
</template>
<script>
import { Plotly } from 'vue-plotly'
import { a } from './HelloWorld.vue'
export default {
    name: 'DashBoard',
    components: {
        Plotly
    },
    data: () => ({
        plot1_msg: '',
        plot2_msg: '',
        plot3_msg: '',
        text: '',
        headers: [
            { text: 'Words (top 10)', align: 'start', sortable: false, value: 'name', },
            { text: 'pos', value: 'pos' },
            { text: 'number', value: 'number' },
            { text: 'frequency (%)', value: 'frequency' },
            { text: 'position (first apperence %)', value: 'position' },
            { text: 'Related explanation', value: 'explanation' },
        ],
        desserts: [],
    }),
    methods: {
        getColor(number) {
            if (number > 20) return 'red'
            else if (number > 15) return 'orange'
            else return 'green'
        },
        jump(){
            this.$router.push('/kg')
        }
    },
    mounted() {
        a.then(value => {
            this.plot1_msg = JSON.parse(value.data.plot1)
            this.plot2_msg = JSON.parse(value.data.plot2)
            this.plot3_msg = JSON.parse(value.data.plot3)
            this.desserts = value.data.table
            this.text = value.data.result
        })

    }
}
</script>
<style>
.part1 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
}

.table {
    margin-top: 2%;
    width: 100%;
}

.title {
    margin-top: 5%;
    margin-left: 1%;
}

.button1 {
    margin-top: 1%;
    display: flex;
    align-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
}

.cards {
    width: 46%;
    margin-left: 6%;
    height: 400px;
    overflow: auto
}

.overview {
    display: flex;
    margin-top: 2%;
}
</style>
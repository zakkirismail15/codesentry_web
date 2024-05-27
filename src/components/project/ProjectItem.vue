<template>
  <div class="flex flex-col shadow-sm rounded-lg m-5 px-5">
    <div class="pt-3 flex items-center justify-center">
      <h3>{{ project.title || 'Project Name' }}</h3>
      <Button class="flex ml-auto" :handleClick="showModal"
        >Remove Project</Button
      >
    </div>
    <div class="flex items-start">
      <div class="flex m-2 h-64 w-64">
        <PieChart :data="chartData" :options="chartOptions" />
      </div>
      <div class="flex flex-1 m-2 h-64 w-64">
        <BarChart :data="barChartData" :options="barChartOptions" />
      </div>
    </div>
    <Modal v-if="isModalVisible" @close="closeModal" @confirm="removeProject">
      <template v-slot:header> </template>
      <template v-slot:body>Are you confirm to remove this project?</template>
      <template> </template>
    </Modal>
  </div>
</template>

<script>
import { Pie, Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  BarElement,
  LinearScale,
} from 'chart.js'
import Button from '../common/Button.vue'
import ProjectService from '@/services/ProjectService'
import Modal from '../common/Modal.vue'
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  BarElement,
  LinearScale
)

export default {
  name: 'ProjectItem',
  components: {
    PieChart: Pie,
    BarChart: Bar,
    Button,
    Modal,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: ['Low', 'Medium', 'High'],
        datasets: [
          {
            backgroundColor: ['#007bff', '#ffc107', '#dc3545'],
            data: [40, 20, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
      barChartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Bugs',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [10, 20, 30, 40, 50],
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      isModalVisible: false,
    }
  },
  methods: {
    removeProject() {
      ProjectService.removeProject(this.project.id)
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style></style>

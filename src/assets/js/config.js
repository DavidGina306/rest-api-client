window.axios = require('axios');
import env from '../../../env';

axios.defaults.baseURL = env.HOST_API;

const NProgress = require('nprogress');
const axiosLoading = {
    stage: 1,
    run: () => {
        switch (axiosLoading.stage) {
            case 2:
                setTimeout(() => {
                    NProgress.inc();
                    axiosLoading.run();
                }, 500);
                break;
            case 3:
                axiosLoading.stage = 1;
                NProgress.done();
                break;
        }
    },
    done: () => {
        axiosLoading.stage = 3;
    }
};


axios.interceptors.request.use((config) => {
    if (axiosLoading.stage === 1) {
        NProgress.start();
        axiosLoading.stage = 2;
        axiosLoading.run();
    }
    return config;
}, (error) => {
    axiosLoading.done();
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    axiosLoading.done();
    logUpdate(response.data);
    return response;
}, (error) => {
    logUpdate(error.response.data);
    axiosLoading.done();
    return Promise.reject(error);
});

const logUpdate = (data) => {
    let log = JSON.parse(localStorage.getItem('log_request')) ?? [];
    log.push({time: new Date(), data});
    localStorage.setItem('log_request', JSON.stringify(log));
};
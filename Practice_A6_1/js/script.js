let progress = 0;

function init() {
    $('.j-btn-1').click((event) => {
        if (progress <= 25) {
            progress += 1;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 50){
            $('.progress-bar').attr('class', 'progress-bar bg-info')
            progress += 1;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 75){
            $('.progress-bar').attr('class', 'progress-bar bg-warning');
            progress += 1;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 99) {
            $('.progress-bar').attr('class', 'progress-bar bg-danger');
            progress += 1;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);  
        }else{
            progress += 0;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }  
    });

    $('.j-btn-2').click((event) => {
        if (progress <= 25) {
            progress += 3;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 50){
            $('.progress-bar').attr('class', 'progress-bar bg-info');
            progress += 3;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 75){
            $('.progress-bar').attr('class', 'progress-bar bg-warning');
            progress += 3;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 97) {
            $('.progress-bar').attr('class', 'progress-bar bg-danger');
            progress += 3;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);    
        }else if (progress <= 99){
            progress += (100-progress)
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);  
        }else{
            progress += 0;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }
    });

    $('.j-btn-3').click((event) => {
        if (progress <= 25) {
            progress += 7;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 50){
            $('.progress-bar').attr('class', 'progress-bar bg-info');
            progress += 7;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 75){
            $('.progress-bar').attr('class', 'progress-bar bg-warning');
            progress += 7;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }else if (progress <= 93) {
            $('.progress-bar').attr('class', 'progress-bar bg-danger');
            progress += 7;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);    
        }else if (progress <= 99){
            progress += (100-progress)
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);  
        }else{
            progress += 0;
            console.log(progress);
            $('.progress-bar').attr('style', `width: ${progress}%`);
            $('.progress-bar').text(`${progress}%`);
        }
    });

    $('.j-btn-4').click((event) => {
        $('.progress-bar').attr('class', 'progress-bar bg-success');
        progress = 0;
        console.log(progress);
        $('.progress-bar').attr('style', `width: ${progress}%`);
        $('.progress-bar').text(`${progress}%`);
    });
}

$(document).ready(init);
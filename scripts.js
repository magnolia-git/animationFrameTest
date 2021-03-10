// This code was originally found here: http://jsfiddle.net/m1erickson/CtsY3/
// I've modified it to fit my needs, more or less

var stop = false;
var frameCount = 0;
var results;
var bpm, bpmInterval, startTime, now, then, elapsed, dancer;
var beattable = [1,1,1,1,2,2,2,2];
var i = 0, j = 0, k = 0;

// jQuery-like shortcut
var $ = function(id){
    return document.getElementById(id);
}

function run() {
	startAnimating(60);
}


function startAnimating(bpm) {

		this.bpm = bpm;
    bpmInterval = 600 / bpm;
    then = Date.now();
    startTime = then;
    animate();
		dancer = document.querySelector(".anim");
}


function animate() {
    // stop
    if (stop) {

        return;
    }

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > bpmInterval) {

        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % bpmInterval);
				dancer.style.animationDuration = bpmInterval * 100 / beattable[i] - 10 + "ms";
        // draw stuff here

        // TESTING...Report #seconds since start and achieved fps.
        var sinceStart = now - startTime;
        var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
				$('results').innerHTML = currentFps + " fps. " + bpm + " bpm.";

					j+= beattable[i]/bpm + 0.0001;

				if (j >= 1 && i + 1 === beattable.length) {
					document.querySelector("#rat").classList.remove('anim');
					$("rat").offsetWidth = $("rat").offsetWidth;
					k++;
					j = 0;
					i = 0;
					document.querySelector("#rat").classList.add("anim");
				} else if (j >= 1) {
					document.querySelector("#rat").classList.remove("anim");
					$("rat").offsetWidth = $("rat").offsetWidth;
					k++;
					j = 0;
					i++;
					document.querySelector("#rat").classList.add("anim");
				}
				$('counter').innerHTML = k + ". " + j;

    }
}

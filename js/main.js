(function($){


    var data; // Declare the variable to store data

    $.getJSON('json/data.json', function(response) {

        // Handle the data once it's loaded
        data = response;

        // Common Vars
        var controller = new ScrollMagic.Controller();
        var nbQuestion = data.length;
        var nbAnswered = 0;
        var nbPoints = 0;

        // Used in UNIQUE and DROPDOWN-2 questions
        var nbCorrect = 0;
        var percentCorrect = 0;

        




        // Supposons que vous ayez votre tableau d'objets JSON dans la variable data

        // Initialisation de la variable nbPointsPossibles à zéro
        var nbPointsPossibles = 0;

        // Parcours de chaque question dans le tableau
        for (var i = 0; i < data.length; i++) {
            // Extrait les réponses de la question actuelle
            var questionAnswers = data[i].questionAnswers;

            // Parcours de chaque réponse dans la question
            for (var j = 0; j < questionAnswers.length; j++) {
                // Incrémente nbPointsPossibles si answerIsTrue est true
                if (questionAnswers[j].answerIsTrue) {
                    nbPointsPossibles++;
                }
            }
        }

        //var nbPoints = 0;

// Affichage du résultat dans la console
//console.log('Le nombre de points possibles est : ' + nbPointsPossibles);







        // This updates vars when answering a question. Check if it is time to remove the warning
        updateStats();
        function updateStats(){
            //$('.nb-question').html(nbQuestion);
            //$('.nb-correct').html(nbCorrect);
            //$('.percent-correct').html(percentCorrect);
            $('.nb-correct').html(nbPoints);
            $('.nb-points').html(nbPoints);
            $('.nb-points-possibles').html(nbPointsPossibles);
            //All Q should be answered for removing the message
            if (nbAnswered === nbQuestion)
            {
                $('.warning').fadeOut();
            }
        }

        function updateFinalText(nbPoints){
            if (nbPoints <= 3)
            {
                $('.final-text').html("text 1");
            }
            if (nbPoints == 4)
            {
                $('.final-text').html("text 2");
            }
            if (nbPoints > 4)
            {
                $('.final-text').html("text 3");
            }
        }

        // This generates HTML from template and data
        buildQuestions(data);
        function buildQuestions(data){
            var source = $("#question-template").html();
            var template = Handlebars.compile(source);

            // For each question, add the 'totalQuestions' property
            var templateData = data.map(function (question, index) {
                return {
                    ...question,
                    index, // Assuming you want to keep the 'index' property
                    totalQuestions: data.length,
                };
            });

            var html = template({ 'question': templateData });
            $(".questions").prepend(html);
        }

        // This happens when clicking on a answer
        $('.answer-unique').on('click', function () {

            // This is done if the question has NOT been answered (security breach here because based on "answered" class)
            if(!$(this).closest('.question').hasClass('answered'))
            {
                nbAnswered = nbAnswered + 1;
            
                // Check if the answer is true or not
                var questionIndex = $(this).closest('.question').attr('id').replace('q', '');
                var answerIndex = $(this).index();
                var answerIsTrue = data[questionIndex].questionAnswers[answerIndex].answerIsTrue;
                var questionHint = data[questionIndex].questionHint;

                // Highlight giver answer and show hint if exists
                // Answer is true here
                if (answerIsTrue) 
                {
                    $(this).addClass('correct');
                    if (questionHint) {
                        //$(this).closest('.question').find('.hint').html('<span class="correct-txt font-semibold underline decoration-2">Correct:</span> ' + questionHint);
                        $(this).closest('.question').find('.hint').html('<span class="font-semibold underline decoration-2">Explications:</span> ' + questionHint);
                    }
                    nbCorrect = nbCorrect + 1;
                    
                }
                // Answer is false here
                    else {
                    $(this).addClass('error');
                    $(this).closest('.question').find('.answer-unique').each(function () {
                        if (data[questionIndex].questionAnswers[$(this).index()].answerIsTrue) {
                            $(this).addClass('correct');
                        }
                    });

                    if (questionHint) {
                        //$(this).closest('.question').find('.hint').html('<span class="error-txt font-semibold underline decoration-2">Erreur:</span> ' + questionHint);
                        $(this).closest('.question').find('.hint').html('<span class="font-semibold underline decoration-2">Explications:</span> ' + questionHint);
                    }

                }

                // Add the "answered" class here. Not ideal
                $(this).closest('.question').addClass('answered');

                // Calculate the % correct answers
                percentCorrect = (100 / nbQuestion * nbCorrect).toFixed(2);

                // Update vars
                updateStats();
            }
        });

        // This happens when clicking on a answer
        $('.answer-unique-ponderation').on('click', function () {

            // This is done if the question has NOT been answered (security breach here because based on "answered" class)
            if(!$(this).closest('.question').hasClass('answered'))
            {
                nbAnswered = nbAnswered + 1;
                
                

                // Check if the answer is true or not
                var questionIndex = $(this).closest('.question').attr('id').replace('q', '');
                var answerIndex = $(this).index();
                var answerScore = data[questionIndex].questionAnswers[answerIndex].answerScore;
                var questionHint = data[questionIndex].questionHint;

              
                //alert(nbPoints);

                nbPoints = nbPoints + answerScore;

                console.log(nbPoints);

                
                $(this).addClass('selected');
                $(this).siblings().addClass('faded');
                if (questionHint) {
                    //$(this).closest('.question').find('.hint').html('<span class="correct-txt font-semibold underline decoration-2">Correct:</span> ' + questionHint);
                    $(this).closest('.question').find('.hint').html('<span class="font-semibold underline decoration-2">Explications:</span> ' + questionHint);
                }
                    
                
               

                // Add the "answered" class here. Not ideal
                $(this).closest('.question').addClass('answered');

                // Calculate the % correct answers
                percentCorrect = (100 / 40 * nbPoints).toFixed(2);

                // Update vars
                updateStats();
                //updateFinalText(nbPoints);
            }
        });

        $('.submit-dropdown-2').on('click', function () {
            
            if(!$(this).parent().parent().hasClass('answered'))
            {
                nbAnswered = nbAnswered + 1;

                
                // Trouve l'index de la question associée à ce bouton
                var questionIndex = $(this).index('.submit-dropdown-2');
                var questionHint = data[questionIndex].questionHint;
                // Obtient les réponses de la question sélectionnée
                var questionAnswers = data[questionIndex].questionAnswers;
                // Extrait les réponses avec answerIsTrue à true
                var trueAnswers = $.map(questionAnswers, function(answer) {
                    if (answer.answerIsTrue) {
                        return answer.answerTxt;
                    }
                });
                // Concatène les réponses avec " et " comme séparateur
                var correctAnswer = trueAnswers.join(' et ');
                correctAnswer = correctAnswer.toLowerCase();
                // Affiche la valeur dans la console (vous pouvez faire autre chose avec cette valeur)
                console.log(correctAnswer);
                

                
                var selectedValue1 = $(this).parent().find('.dropdown-a').val();
                var selectedValue2 = $(this).parent().find('.dropdown-b').val();
                var completeAnswer = selectedValue1 + " et " + selectedValue2
                completeAnswer = completeAnswer.toLowerCase();
                var completeAnswerR = selectedValue2 + " et " + selectedValue1
                completeAnswerR = completeAnswerR.toLowerCase();



                if (trueAnswers.includes(selectedValue1)) {
                    $(this).parent().find('.dropdown-a').addClass('correct');
                    $(this).parent().find('.dropdown-a').prop('disabled', true);
                    nbPoints = nbPoints + 1;
                } else {
                    $(this).parent().find('.dropdown-a').addClass('error');
                    $(this).parent().find('.dropdown-a').prop('disabled', true);
                }

                if ((trueAnswers.includes(selectedValue2) && (selectedValue1 !== selectedValue2))) {
                    $(this).parent().find('.dropdown-b').addClass('correct');
                    $(this).parent().find('.dropdown-b').prop('disabled', true);
                    nbPoints = nbPoints + 1;
                } else {
                    $(this).parent().find('.dropdown-b').addClass('error');
                    $(this).parent().find('.dropdown-b').prop('disabled', true);
                }

                if (questionHint) {
                    //$(this).closest('.question').find('.hint').html('<span class="error-txt font-semibold underline decoration-2">Erreur:</span> ' + questionHint);
                    $(this).closest('.question').find('.hint').html('<span class="font-semibold underline decoration-2">Explications:</span> ' + questionHint);
                }


                if (completeAnswer === correctAnswer || completeAnswerR === correctAnswer)
                {
                    //alert("JUSTE !!!!");
                    nbCorrect = nbCorrect + 1;
                    if (questionHint) {
                        $(this).closest('.question').find('.hint').html('<span class="correct-txt font-semibold underline decoration-2">Correct:</span> ' + questionHint);
                    }
                }
                else
                {
                    //alert("FAUX !!!!");
                    if (questionHint) {
                        $(this).closest('.question').find('.hint').html('<span class="error-txt font-semibold underline decoration-2">Erreur:</span> ' + questionHint);
                    }
                }
                // alert(completeAnswer);
                // alert(completeAnswerR);



                $(this).parent().parent().addClass('answered');
                // Calculate the % correct answers
                percentCorrect = (100 / nbQuestion * nbCorrect).toFixed(2);

                // Update vars
                updateStats();
            }
        });


        ////////////////////////////////////////////////////////////////
        //  GSAP ANIMATION
        ////////////////////////////////////////////////////////////////
        //  Quiz vars for animation
        var $sumup = $('.sumup');
        var $gauge = $('.gauge');
        var $gaugeCursor = $gauge.find('.gauge-cursor');
        var $gaugeBg = $gauge.find('.gauge-bg');
        var $nbResults = $sumup.find('.nb-results');
        var $percentResults = $sumup.find('.percent-results');
        var $pointsResults = $sumup.find('.points-results');
        var $finalText = $sumup.find('.final-text');
        var $btnRedo = $sumup.find('.btn-redo');
        var $btnShar = $sumup.find('.btn-shar');
        
        clearGaugeStage();
        function clearGaugeStage(){
            var clearGaugeStageTl = new TimelineMax();
            clearGaugeStageTl
                .set($sumup, { autoAlpha: 0.3, transformOrigin: "center center" })
                .set($gaugeBg, { autoAlpha: 0, y: "-=10px", transformOrigin: "center center" })
                .set($gaugeCursor, { autoAlpha: 0, y: "-=20px", transformOrigin: "center center" })
                .set($nbResults, { autoAlpha: 0, y: "-=10px", transformOrigin: "center center" })
                .set($percentResults, { autoAlpha: 0, y: "-=10px", transformOrigin: "center center" })
                .set($pointsResults, { autoAlpha: 0, y: "-=10px", transformOrigin: "center center" })
                .set($finalText, { autoAlpha: 0, transformOrigin: "center center" })
                .set($btnRedo, { autoAlpha: 0, y: "-=10px", transformOrigin: "center center" })
                .set($btnShar, { autoAlpha: 0, y: "-=10px", transformOrigin: "center center" });
            return clearGaugeStageTl;
        }

        // Animation trigger
        var statsDisplayed = false;
        new ScrollMagic.Scene({triggerElement: ".gauge"})
            .on("enter", function (event) {

                // Make the result animation only if all Q have been answered
                if(nbAnswered === nbQuestion)
                {
                    // Make the result animation only if never been done
                    if(statsDisplayed == false)
                    {
                        // Just lower a bit percentCorrect to avoid cursor goinf too far (left: 100%)
                        if(percentCorrect == 100){ percentCorrect = 95 }

                        // Result animation
                        var gaugeTl = new TimelineMax({ paused: true })
                            .to($sumup, .3, { autoAlpha: 1, ease: Power4.easeInOut })
                            .to($gaugeBg, 1, { autoAlpha: 1, y: "+=10px", ease: Power4.easeInOut })
                            .to($gaugeCursor, .5, { autoAlpha: 1, y: "+=20px", ease: Power4.easeInOut, onComplete: updateNumber }, "-=0.5")
                            .to($nbResults, .3, { autoAlpha: 1, y: "+=10px", ease: Power4.easeInOut })
                            .to($gaugeCursor, 2, { left: percentCorrect + "%", ease: Power4.easeInOut, onComplete: updatePercent })
                            // .to($percentResults, .3, { autoAlpha: 1, y: "+=10px", ease: Power4.easeInOut })
                            // .to($pointsResults, .3, { autoAlpha: 1, y: "+=10px", ease: Power4.easeInOut, onComplete: updatePoints })
                            .to($finalText, .3, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
                            .to($btnRedo, .7, { autoAlpha: 1,  y: "+=10px", ease: Power4.easeInOut }, "+=1.7")
                            .to($btnShar, .7, { autoAlpha: 1,  y: "+=10px", ease: Power4.easeInOut });
                        gaugeTl.play();
                        statsDisplayed = true;
                    }
                    else
                    {
                        //.to($nbResults, .3, { autoAlpha: 1, y: "+=10px", ease: Power4.easeInOut })
                    }
                }
                else
                {
                    
                }
            }).triggerHook(0.6).addTo(controller);

        ////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////

        // Counting result number effect (plugin based counter-up.js)
        function updateNumber(){
            $('.nb-correct').counterUp({
                delay: 10,
                time: 1000
            });
        }

        // Counting result percent effect (plugin based counter-up.js)
        function updatePercent(){
            $('.percent-correct').counterUp({
                delay: 10,
                time: 1000
            });
        }

        function updatePoints(){
            $('.nb-points').counterUp({
                delay: 10,
                time: 1000
            });
        }

        //Trigger share panel when clicking on .sumpup .btn-shar
        $('.btn-shar').on('click', function () {
            $('.aside-r-toggle').click();
        });
        
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        // Handle errors if the request fails
        console.error('No quiz data found', textStatus, errorThrown);
    });

    

    // Base introduction effects

    window.scrollTo(0, 0);
    setTimeout(function() { 
        $('body').addClass('is-visible');
    }, 1000);

    

    
    
    // Simple helper to start counting question from 1 and not from 0
    Handlebars.registerHelper('indexFormatter', function(index) {
        return index+1;
    });

    Handlebars.registerHelper('isEqual', function (a, b, options) {
        if (a === b) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    

    

    

    

    



    
    

    
  
	
   
  
})(jQuery);


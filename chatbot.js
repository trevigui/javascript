//script ending prematurely is a sign that a semicolon is missing somewhere.
//want use the || directly in .includes() method it seems, must multiply the variable call...... for now.
// testzeteztzeteztezf


function chatBot() {
    let order = prompt('Do you want to order takeaway or would you like to book a table?') ;
    if (order.toLowerCase().includes('book') || order.toLowerCase().includes('table') == true) {
        let participants = prompt ('Great choice! How many people will be there? ype the number below:') ;
        let surname = prompt ('What name should I put you down as?') ;0
        let bookingTime = prompt('At what time would you like to come?') ;
        alert('Very well! Your booking for '+participants+' people at '+bookingTime+' has been placed!\nThank you for choosing us.\nDo note that we reserve the right to cancel this booking if it is not placed within opening times.\nPlease cancel your booking 24 hours in advance if you cannot honor it.') ;
    } else if (order.toLowerCase().includes('take') || order.toLowerCase().includes('away') || order.toLowerCase().includes('takeaway') == true) {
        let foodChoice = prompt('Takeaway it is. Would you prefer to order a menu or a la carte?') ;
        if (foodChoice.toLowerCase().includes('menu') == true) {
            let menuChoice = prompt ('Coming right up! Here are your options: \n\n •nMidday/Dinnertime menu \n• Kid\'s menu \n\nWhich one will it be?') ;
            if (menuChoice.toLowerCase().includes('midday' || 'dinnertime' || 'normal' || 'regular' || 'adult') == true) {
                let amount = prompt ('How many do you need?') ;
                let pickupTime = prompt ('At what time would you like to pick up your order?') ;
                alert('Your order for '+amount+' midday/dinnertime menu(s) has been taken and will be ready at '+pickupTime+'.\nThank you for choosing us.\nDo note that we reserve the right to cancel this booking if it is not placed within opening times.\nPlease cancel your booking 24 hours in advance if you cannot honor it.') ;
            } else if(menuChoice.toLowerCase().includes('kid') || menuChoice.toLowerCase().includes('meal')  == true) {
                let amount = prompt ('How many do you need?') ;
                let pickupTime = prompt ('At what time would you like to pick up your order?') ;
                alert('Your order for '+amount+' kid\'s menu(s) has been taken and will be ready at '+pickupTime+'.\nThank you for choosing us.\nDo note that we reserve the right to cancel this booking if it is not placed within opening times.\nPlease cancel your booking 24 hours in advance if you cannot honor it.') ;
            } else { prompt('Sorry, I did not understand. Do you want a menu or a la carte?') ;
            }
        } else if (foodChoice.toLowerCase().includes('carte') || foodChoice.toLowerCase().includes('pick') || foodChoice.toLowerCase().includes('myself') || foodChoice.toLowerCase().includes('choose') || foodChoice.toLowerCase().includes('what i want') == true ) {
            let foodName = prompt('Sure, here are our specialties:\n\n• Beef Wellington \n• Cordon Bleu \n\nWhich dish do you wish to order? Please type in its name:') ;// The \n signals a new line.
            if (foodName.toLowerCase().toLowerCase().includes('beef') || foodName.toLowerCase().toLowerCase().includes('wellington') == true) {
                let amount = prompt ('How many do you need?') ;
                let pickupTime = prompt ('At what time would you like to pick up your order?') ;
                alert('Your order for '+amount+ 'Beef Wellington(s) has been queued for pickup at'+pickupTime+'.') ; //How do I add a 'Did you need anything else? yesno
            } else if (foodName.toLowerCase().toLowerCase().includes('cordon') || foodName.toLowerCase().toLowerCase().includes('bleu') == true) {
                let amount = prompt ('How many do you need?') ;
                let pickupTime = prompt ('At what time would you like to pick up your order?') ;
                alert('Your order for '+amount+ 'Cordon(s) bleu(s) has been queued for pickup at'+pickupTime+'.') ;
            } else { prompt('Sorry, I did not understand. Which dish do you wish to order? Please type in its name:') ;
            }
        } else { prompt('Sorry, I did not understand. Do you want a menu or a la carte?') ;
        }       
    } else {
        prompt('Sorry, I did not understand. Do you want to order takeaway or would you like to book a table?') ;
    }
}
chatBot()
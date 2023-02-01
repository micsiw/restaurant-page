function createContact () {
    const contact = document.createElement('div');
    contact.classList.add('contact-content');

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('contact-title');
    contactTitle.innerHTML = 'CONTACT US';
    contact.appendChild(contactTitle);

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');
    contact.appendChild(contactWrapper)

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
    contactWrapper.appendChild(contactDetails);

    const locationSection = document.createElement('div');
    locationSection.classList.add('details-section');
    contactDetails.appendChild(locationSection);

    const locationTitle = document.createElement('p');
    locationTitle.classList.add('details-title');
    locationTitle.innerHTML = 'Location';
    const detailsUpperAddress = document.createElement('p');
    detailsUpperAddress.classList.add('details-content');
    detailsUpperAddress.innerHTML = 'Warsaw';
    const detailsLowerAddress = document.createElement('p');
    detailsLowerAddress.classList.add('details-content');
    detailsLowerAddress.innerHTML = 'Karolkowa 27';
    locationSection.append(locationTitle, detailsUpperAddress, detailsLowerAddress);

    const detailsBorder = document.createElement('div');
    detailsBorder.classList.add('contact-border');
    contactDetails.appendChild(detailsBorder);

    const reservationSection = document.createElement('div');
    reservationSection.classList.add('details-section');
    contactDetails.appendChild(reservationSection);

    const reservationTitle = document.createElement('p');
    reservationTitle.classList.add('details-title');
    reservationTitle.innerHTML = 'Reservations';
    const reservationContent = document.createElement('p');
    reservationContent.classList.add('details-content');
    reservationContent.innerHTML = '123-345-567';
    reservationSection.append(reservationTitle, reservationContent);

    const reservationsBorder = document.createElement('div');
    reservationsBorder.classList.add('contact-border');
    contactDetails.appendChild(reservationsBorder);

    const hoursSection = document.createElement('p');
    hoursSection.classList.add('details-section');
    contactDetails.appendChild(hoursSection);

    const hoursTitle = document.createElement('p');
    hoursTitle.classList.add('details-title');
    hoursTitle.innerHTML = 'Open hours';
    const hoursContent = document.createElement('p');
    hoursContent.classList.add('details-content');
    hoursContent.innerHTML = '12:00&nbsp;-&nbsp;22:00';
    hoursSection.append(hoursTitle, hoursContent);

    const contactMap = document.createElement('div');
    contactMap.classList.add('contact-map');
    contactWrapper.appendChild(contactMap);

    const mapImage = document.createElement('img');
    mapImage.src = 'images/location.png';
    contactMap.appendChild(mapImage);
    
    return contact
}

export default createContact();
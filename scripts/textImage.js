document.addEventListener("DOMContentLoaded", async () => { 
    const containers = document.querySelectorAll("[class^='text-image-']"); // Seleciona todos os elementos que começam com "text-image-"

    if (containers.length === 0) return;

    try {
        const response = await fetch("./../data/text-image-info.json");
        const data = await response.json();

        containers.forEach(container => {
            const classList = Array.from(container.classList);
            const selectedCardClass = classList.find(cls => cls.startsWith("text-image-"));
            const selectedCardIndex = selectedCardClass?.split("-")[2];

            if (!selectedCardIndex) return;

            if (selectedCardIndex === "1") {
                container.innerHTML = `
                    <section class="image-and-text-container no-padding mb-5">
                        <figure>
                            <img src="./Assets/images/avanti-mug-2.png" alt="Caneca Avanti" title="Caneca Avanti" class="image-and-text-img first-mug-avanti-image">
                        </figure>
                        <div class="inner-text-container with-padding">
                            <h3 class="text-start">LOREM IPSUM</h3>
                            <div class="content">
                                <p class="mobile-text">
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                </p>
                                <p class="mobile-text">
                                    Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et.
                                </p>
                                
                                <p class="desktop-text">
                                    Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.
                                </p>
                                <p class="desktop-text">
                                    Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.
                                </p>
                            </div>        
                        </div>
                    </section>
                `;
            } else if (selectedCardIndex === "2") {
                container.innerHTML = `
                    <section class="image-text-outer-container bg-gray">
                        <div class="image-and-text-container reverse">
                            <figure>
                                <img src="./Assets/images/avanti-mug.png" alt="Caneca Avanti" title="Caneca Avanti">
                            </figure>
                            <div class="inner-text-container">
                                <h3 class="text-center">LOREM IPSUM</h3>
                                <div class="content">
                                    <div class="map-pin-text-container d-flex">
                                        <img src="./Assets/images/map-pin-icon.png" alt="Map pin" title="Map pin" style="width: 60px; height: 60px;">
                                        <p class="mobile-text">
                                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        </p>
                                        <p class="desktop-text">
                                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>

                                    <div class="map-pin-text-container d-flex">
                                        <img src="./Assets/images/map-pin-icon.png" alt="Map pin" title="Map pin" style="width: 60px; height: 60px;">
                                        <p class="mobile-text">
                                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        </p>
                                        <p class="desktop-text">
                                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>

                                    <div class="map-pin-text-container d-flex">
                                        <img src="./Assets/images/map-pin-icon.png" alt="Map pin" title="Map pin" style="width: 60px; height: 60px;">
                                        <p class="mobile-text">
                                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        </p>
                                        <p class="desktop-text">
                                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                `;
            }
        });
    } catch (error) {
        console.error("Erro ao carregar os dados do JSON", error);
    }
});

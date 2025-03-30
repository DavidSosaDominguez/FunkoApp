# FunkoStore
## Integrantes
Grupo 41.4 compuesto por:

Miguel Castellano Hernández (miguelink113),
Daniel Sosa Domínguez (User, DaniSosa) y
David Sosa Domínguez (RReDDpy, DavidSosaDomínguez)
## Requisitos Web FunkoStore
### Requisitos no funcionales

- El sistema debe ser fácil de utilizar e intuitivo para nuevos usuarios.

- El sistema debe responder al usuario en todo momento en menos de 2 segundos.

- La página web tendrá un tipo de diseño “responsive” para garantizar su buen uso y visualización tanto en PC como en móviles.

- La interfaz de usuario será implementada mediante HTML y CSS.

- El contenido disponible de la tienda deberá poder actualizarse o modificarse fácilmente.

- El sistema no compartirá datos personales de un usuario con el resto.

### Requisitos funcionales
- El sistema llevará al usuario a la página de inicio de sesión en el caso de que este intente comprar un producto sin estar identificado.

- Los usuarios deberán ingresar al sistema con un nombre, una contraseña, y una dirección de correo electrónico para que puedan ser contactados al realizar el seguimiento de su pedido.

- La base de datos será implementada mediante un archivo Json.

- El campo nombre solo acepta caracteres alfabéticos.

- El campo contraseña acepta caracteres alfabéticos, numéricos y especiales.

- El campo dirección acepta caracteres alfabéticos y numéricos.

- El sistema mostrará el número de ejemplares de un producto que haya en stock. Este número cambiará cuando cualquier usuario compre o venda alguna figura.


## Mockups y Storyboard
Los mockups y el storyboard en "mockups_and_storyboard.pdf", localizado en la carpeta "mockups". Allí, también se pueden ver las imágenes de manera individual en la subcarpeta "individual_mockups".

## Listado de páginas html y los mockups que representan
Página de inicio web: index.html (sin sesión iniciada)--> search page content logged out.png
                      index.html (con sesión iniciada) --> search page content logged in.png
                      product_page.html --> product logged in.png
                      product_page.html --> product logged out.png
                      sign_up_page.html --> register page.png
                      sign_in_page.html --> log in page.png


## Listado de archivos templates
- header_template.html (sin sesión iniciada) --> header_logged_out.png --> se carga en todas las páginas en las que no se ha iniciado sesión
- header_template.html (con sesión iniciada) --> header_logged_in.png --> se carga en las páginas index.html y product_page.html cuando se ha iniciado sesión
- footer_template.html --> footer.png --> se carga en todas las páginas
- log_product_main_template.html --> various_products.png --> se carga en: log_product_page.html ???
- no_log_product_main_template.html --> various_products.png --> se carga en: no_log_product_page.html ???
- aside_template.html --> related_products_section.png --> se carga en: product_page.html
- filters_box_template.html --> filters_box.png --> se carga en cualquier página al apretar el botón de filtrado de la cabecera, en forma de pop up
## Enlaces de Figma y Trello
Enlace a Figma: https://www.figma.com/proto/Y5RfUjnKBVKyW7YP7aJ0Od/FunkoStore?node-id=0-1&t=oSm50ukrvczhm2Jw-1
Enlace a Trello: https://trello.com/invite/b/67a251c975e168960811fcb6/ATTI2ffbfd1ea74fb8f90c93274d136c8c3664EC95DE/funkoweb

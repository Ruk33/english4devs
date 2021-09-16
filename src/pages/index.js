import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Inglés para programadores">
      <main>
        <section className="container">
          <div className="row">
            <div className="col">
              <div className="padding-vert--lg">
                <h1>Pasá entrevistas en Inglés y conseguí mejores propuestas laborales.</h1>
                <p>Aprendé Inglés de forma fácil, efectiva y a distancia con nuestros cursos enfocados en un objetivo, pasar entrevistas laborales.</p>
              </div>
            </div>
            <div className="col">
              <div className="padding-vert--lg">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/ELfl53pGKzg?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col padding-vert--md">
              Valor 1
            </div>
            <div className="col padding-vert--md">
              Valor 2
            </div>
            <div className="col padding-vert--md">
              Valor 3
            </div>
            <div className="col padding-vert--md">
              Valor 4
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row padding-vert--lg">
            <div className="col col--4">
              <img src="/img/logo.png" />
            </div>
            <div className="col">
              <h2>Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, massa in tempus bibendum, tortor felis suscipit elit, nec vulputate velit est et ipsum. Nunc at ante nec quam bibendum molestie euismod condimentum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas at blandit purus. Proin aliquet suscipit est, vel volutpat diam aliquam quis. Curabitur porta laoreet ipsum, in semper leo eleifend ut. Proin pellentesque lacus lacus, nec vestibulum arcu venenatis sed. Nulla metus nisl, posuere rutrum varius a, semper a erat. Maecenas fermentum purus eu urna elementum cursus. Suspendisse potenti. Phasellus fermentum est id ullamcorper consectetur.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row padding-vert--lg">
            <div className="col">
              <h2>Lorem Ipsum</h2>
              <p>Fusce nec vestibulum turpis. Aliquam sed finibus purus. Cras condimentum eu ligula et sodales. Nulla convallis massa congue consequat aliquam. Aliquam ex augue, laoreet ac cursus eu, pharetra non massa. In hac habitasse platea dictumst. Proin eget blandit lorem. Suspendisse interdum arcu vestibulum condimentum ultrices. Duis ultrices, felis nec porta cursus, nibh ex aliquet nibh, eu aliquam lorem libero sit amet magna. Nunc ac ligula ut justo molestie sagittis eu nec nibh. Praesent posuere eleifend augue et iaculis.</p>
            </div>
            <div className="col col--4">
              <img src="/img/logo.png" />
            </div>
          </div>
        </div>

        <div className="cta-container padding-vert--lg">
          <h1>¿Listo para pasar tu próxima entrevista laboral?</h1>
          <p>Anotate en nuestros cursos y comenzá a acceder a mejores propuestas laborales.</p>
          <a href="#" className="button button--lg button--primary">¡Quiero aprender Inglés!</a>
        </div>
      </main>
    </Layout>
  );
}

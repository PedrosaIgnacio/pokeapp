import { Form, Formik } from "formik";
import React from "react";
import { Layout } from "../layout/Layout";
import * as Yup from "yup";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { PokeCard } from "./components/PokeCard";

interface IInitialValues {
  name: string;
}

export const Home = () => {
  const formSchema = Yup.object({
    name: Yup.string().required("Required Field"),
  });

  const initialValues: IInitialValues = {
    name: "",
  };

  const { data: pokemons } = useGetPokemons();

  return (
    <Layout>
      <div style={{ backgroundColor: "#f5f5f7" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={() => console.log("Click")}
        >
          <Form className="mt-3">
            <div className="d-flex justify-content-center">
              <div className="form-group col-lg-2 col-md-3 col-sm-4">
                <input className="form-control" placeholder="Search pokemon" />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </Form>
        </Formik>
        <div className="d-flex flex-wrap justify-content-center mt-3">
          {pokemons?.results.map((p, i) => {
            return <PokeCard key={i} poke={p} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

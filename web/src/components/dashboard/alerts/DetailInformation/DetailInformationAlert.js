import React, { useState } from "react";
import * as Styled from "../../../styles/dashboard/DashboardStyles";
import axios from "axios";
import env from "../../../../constants/Application/env.json";

export default function DetailInformationAlert() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [values, setValues] = useState({
    month: "",
    day: "",
    year: "",
  });
  const [sex, setSex] = useState("");
  const [dateError, setDateError] = useState(false);
  const [sexError, setSexError] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const takeSexValue = (SEX) => {
    setSex(SEX);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submit = () => {
    if (!values.month || !values.day || !values.year) {
      setDateError(true);
      setSexError(false);
    } else if (!sex) {
      setSexError(true);
      setDateError(false);
    } else {
      setSpinner(true);
      setSexError(false);
      setDateError(false);
      const detailInformation = [
        {
          date: [
            {
              day: values.day,
              month: values.month,
              year: values.year,
            },
          ],
          sex: sex,
        },
      ];
      axios
        .post(`${env.host}/auth/changeDetailInformation`, {
          email: user.email,
          detailInformation: detailInformation,
        })
        .then((res) => {
          setSpinner(false);
          console.log(res.data);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.location.reload();
        });
    }
  };
  return (
    <>
      <Styled.Container__AlertContainer>
        <Styled.Container__AlertContent>
          {spinner && (
            <>
              <Styled.AlertContainer__SpinnerBlur></Styled.AlertContainer__SpinnerBlur>
              <Styled.AlertContainer__Spinner>
                <Styled.AlertContaner__SpinnerSpan></Styled.AlertContaner__SpinnerSpan>
              </Styled.AlertContainer__Spinner>
            </>
          )}
          <Styled.Container__AlertSpan>
            Hello, {user.firstName}
          </Styled.Container__AlertSpan>
          <Styled.Container__AlertSpanChild>
            Please enter your information
          </Styled.Container__AlertSpanChild>
          <Styled.Container__Alert__BirthdayContainer>
            <div>
              <Styled.Container__Alert__BirthdaySpan>
                Birthday
              </Styled.Container__Alert__BirthdaySpan>
            </div>
            <Styled.Container__AlertBirthday__SelectContainer>
              <Styled.Container__AlertBirthday__Select
                aria-label="Month"
                value={values.month}
                name="month"
                onChange={handleChange}
              >
                <option>Month</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </Styled.Container__AlertBirthday__Select>
              <Styled.Container__AlertBirthday__Select
                aria-label="Day"
                value={values.day}
                name="day"
                onChange={handleChange}
              >
                <option>Day</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </Styled.Container__AlertBirthday__Select>
              <Styled.Container__AlertBirthday__Select
                aria-label="Year"
                value={values.year}
                name="year"
                onChange={handleChange}
              >
                <option>Year</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
                <option>1999</option>
                <option>1998</option>
                <option>1997</option>
                <option>1996</option>
                <option>1995</option>
                <option>1994</option>
                <option>1993</option>
                <option>1992</option>
                <option>1991</option>
                <option>1990</option>
                <option>1989</option>
                <option>1988</option>
                <option>1987</option>
                <option>1986</option>
                <option>1985</option>
                <option>1984</option>
                <option>1983</option>
                <option>1982</option>
                <option>1981</option>
                <option>1980</option>
                <option>1979</option>
                <option>1978</option>
                <option>1977</option>
                <option>1976</option>
                <option>1975</option>
                <option>1974</option>
                <option>1973</option>
                <option>1972</option>
                <option>1971</option>
                <option>1970</option>
                <option>1969</option>
                <option>1968</option>
                <option>1967</option>
                <option>1966</option>
                <option>1965</option>
                <option>1964</option>
                <option>1963</option>
                <option>1962</option>
                <option>1961</option>
                <option>1960</option>
                <option>1959</option>
                <option>1958</option>
                <option>1957</option>
                <option>1956</option>
                <option>1955</option>
                <option>1954</option>
                <option>1953</option>
                <option>1952</option>
                <option>1951</option>
                <option>1950</option>
                <option>1949</option>
                <option>1948</option>
                <option>1947</option>
                <option>1946</option>
                <option>1945</option>
                <option>1944</option>
                <option>1943</option>
                <option>1942</option>
                <option>1941</option>
                <option>1940</option>
                <option>1939</option>
                <option>1938</option>
                <option>1937</option>
                <option>1936</option>
                <option>1935</option>
                <option>1934</option>
                <option>1933</option>
                <option>1932</option>
                <option>1931</option>
                <option>1930</option>
                <option>1929</option>
                <option>1928</option>
                <option>1927</option>
                <option>1926</option>
                <option>1925</option>
                <option>1924</option>
                <option>1923</option>
                <option>1922</option>
                <option>1921</option>
                <option>1920</option>
                <option>1919</option>
                <option>1918</option>
                <option>1917</option>
                <option>1916</option>
                <option>1915</option>
                <option>1914</option>
                <option>1913</option>
                <option>1912</option>
                <option>1911</option>
                <option>1910</option>
                <option>1909</option>
                <option>1908</option>
                <option>1907</option>
                <option>1906</option>
                <option>1905</option>
              </Styled.Container__AlertBirthday__Select>
              {dateError && (
                <>
                  <Styled.Container__TooltipContainer>
                    <Styled.Container__TooltipSpan>
                      Required
                    </Styled.Container__TooltipSpan>
                  </Styled.Container__TooltipContainer>
                </>
              )}
            </Styled.Container__AlertBirthday__SelectContainer>
          </Styled.Container__Alert__BirthdayContainer>
          <Styled.Container__Alert__BirthdayContainer>
            <div>
              <Styled.Container__Alert__BirthdaySpan>
                Gender
              </Styled.Container__Alert__BirthdaySpan>
            </div>
            <Styled.Container__AlertBirthday__SelectContainer>
              <Styled.Container__AlertGender__Span>
                <Styled.Container__AlertGender__SpanLabel htmlFor="female">
                  Female
                </Styled.Container__AlertGender__SpanLabel>
                <Styled.Container__AlertGender__SpanInput
                  type="radio"
                  name="sex"
                  id="female"
                  onClick={() => takeSexValue("female")}
                />
              </Styled.Container__AlertGender__Span>
              <Styled.Container__AlertGender__Span>
                <Styled.Container__AlertGender__SpanLabel htmlFor="male">
                  Male
                </Styled.Container__AlertGender__SpanLabel>
                <Styled.Container__AlertGender__SpanInput
                  type="radio"
                  name="sex"
                  id="male"
                  onClick={() => takeSexValue("male")}
                />
              </Styled.Container__AlertGender__Span>
              <Styled.Container__AlertGender__Span>
                <Styled.Container__AlertGender__SpanLabel htmlFor="custom">
                  Custom
                </Styled.Container__AlertGender__SpanLabel>
                <Styled.Container__AlertGender__SpanInput
                  type="radio"
                  name="sex"
                  id="custom"
                  onClick={() => takeSexValue("custom")}
                />
              </Styled.Container__AlertGender__Span>
              {sexError && (
                <>
                  <Styled.Container__TooltipContainer>
                    <Styled.Container__TooltipSpan>
                      Required
                    </Styled.Container__TooltipSpan>
                  </Styled.Container__TooltipContainer>
                </>
              )}
            </Styled.Container__AlertBirthday__SelectContainer>
          </Styled.Container__Alert__BirthdayContainer>
          <Styled.Container__AlertButton
            style={{ marginTop: "40px" }}
            onClick={() => {
              submit();
            }}
          >
            Save
          </Styled.Container__AlertButton>
        </Styled.Container__AlertContent>
      </Styled.Container__AlertContainer>
    </>
  );
}

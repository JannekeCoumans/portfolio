import React, { Component } from "react";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { ContentHeader, settings } from "config/C4";

class OverViewContributions extends Component {
  constructor() {
    super();
    this.state = {
      contributions: {},
      monthlyContributions: [],
    };
  }

  async componentDidMount() {
    await this.getContributions();
    this.setContributionData();
  }

  async getContributions() {
    const { accessToken } = settings;
    const headers = {
      Authorization: `bearer ${accessToken}`,
    };
    const body = {
      query: `query {
                user(login: "JannekeCoumans") {
                  name
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                        }
                        firstDay
                      }
                    }
                  }
                }
              }`,
    };
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });
    const result = await response.json();
    if (!result.errors && result.data) {
      this.setState({ contributions: result.data });
    }
  }

  setContributionData() {
    const { contributions } = this.state;
    const months = {
      1: { contributions: 0, nameOfMonth: "January", year: null },
      2: { contributions: 0, nameOfMonth: "Februari", year: null },
      3: { contributions: 0, nameOfMonth: "March", year: null },
      4: { contributions: 0, nameOfMonth: "April", year: null },
      5: { contributions: 0, nameOfMonth: "May", year: null },
      6: { contributions: 0, nameOfMonth: "June", year: null },
      7: { contributions: 0, nameOfMonth: "July", year: null },
      8: { contributions: 0, nameOfMonth: "August", year: null },
      9: { contributions: 0, nameOfMonth: "September", year: null },
      10: { contributions: 0, nameOfMonth: "October", year: null },
      11: { contributions: 0, nameOfMonth: "November", year: null },
      12: { contributions: 0, nameOfMonth: "December", year: null },
    };

    if (contributions && contributions.user) {
      const contributionWeeks = Object.values(
        contributions.user.contributionsCollection.contributionCalendar.weeks
      );
      contributionWeeks.forEach((week) => {
        let weeklyContributions = null;
        week.contributionDays.map(
          (item) =>
            (weeklyContributions = weeklyContributions + item.contributionCount)
        );
        const date = new Date(week.firstDay);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        months[month].year = year;
        months[month].contributions += weeklyContributions;
      });
    }
    this.setState({
      monthlyContributions: months,
    });

    // TODO: dynamische manier om contributions weer te geven op de volgende manieren: laatste jaar, laatste half jaar, per maand, per week.
  }

  render() {
    const { monthlyContributions } = this.state;
    const chartData = Object.values(monthlyContributions).map((month) => {
      return {
        x: `${month.nameOfMonth}, ${month.year}`,
        y: month.contributions,
      };
    });

    return (
      <div className="overViewContributions">
        <ContentHeader title="github contributions" />
        <VictoryChart
          domainPadding={6}
          width={400}
          height={300}
          padding={{top: 20, bottom: 100, left: 30, right: 30}}
        >
          <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} style={{ tickLabels: { fontSize: 12 } }} />
          <VictoryAxis style={{ tickLabels: { fontSize: 12, padding: 12, angle: 270, textAnchor: "end"}, grid: { stroke: "#F4F5F7", strokeWidth: 0.5 } }} />
          <VictoryLine
            interpolation="natural"
            style={{
              data: { stroke: "#E37C00", strokeWidth: 7 },
            }}
            data={chartData}
          />
        </VictoryChart>
      </div>
    );
  }
}
export default OverViewContributions;

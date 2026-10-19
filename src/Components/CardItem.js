import React from "react";
import OrganizationLogo from "./OrganizationLogo";

const CardItem = ({ title, subtitle, description, list, children }) => (
    <div className="card-item">
        {(title || subtitle) && (
            <div className="card-heading">
                <div className="card-heading-copy">
                    {title && <h3 className="card-title">{title}</h3>}
                    {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
                </div>
                <OrganizationLogo name={`${title || ""} ${subtitle || ""}`} />
            </div>
        )}
        {description && <p className="card-description">{description}</p>}
        {list && (
            <ul className="card-list">
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        )}
        {children}
    </div>
);

export default CardItem;
